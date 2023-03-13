import React, {useEffect, useMemo} from 'react';
import {Bases} from "./baseball/Bases";
import {useState} from 'react';
import {BaseEnum} from "./baseball/model/BasesEnum";
import {Control} from "./baseball/Control";
import {Score} from "./baseball/Score";
import {Inning} from "./baseball/Inning";
import {InningHalfEnum} from "./baseball/model/InningHalfEnum";
import {InningValue} from "./baseball/model/Inning";
import {Counts} from "./baseball/Counts";
import {State} from "./baseball/model/State";
import { SponsorsControl } from "./sponsors/SponsorsControl";
import { SponsorTicker } from "./sponsors/SponsorTicker";


const savedState = localStorage.getItem('state');
let initialState = savedState ? JSON.parse(savedState) : {
    bases: [],
    home: '',
    away: '',
    score: [0, 0],
    inning: {
        value: 0,
        half: InningHalfEnum.TOP
    },
    outs: 0,
    strikes: 0,
    balls: 0
};


function App() {
    const [bases, setBases] = useState<BaseEnum[]>(initialState.bases)
    const [home, setHome] = useState<string>(initialState.home);
    const [away, setAway] = useState<string>(initialState.away);
    const [score, setScore] = useState<[number, number]>(initialState.score);
    const [inning, setInning] = useState<InningValue>(initialState.inning);
    const [outs, setOuts] = useState<number>(initialState.outs);
    const [strikes, setStrikes] = useState<number>(initialState.strikes);
    const [balls, setBalls] = useState<number>(initialState.balls);
    const [sponsors, setSponsors] = useState<string[]>([]);
    const state: State = useMemo(() => {
        return {
            bases,
            home,
            away,
            score,
            inning: inning,
            outs: outs,
            strikes: strikes,
            balls: balls
        }
    }, [bases, home, away,score, inning, outs,strikes, balls])

    useEffect(() => {
        localStorage.setItem('state', JSON.stringify(state));
    }, [state])

    return (
        <div className="">
            <div className="scoreboard">
                <div className="scoreboard-top">
                    <Score homeName={home} awayName={away} awayScore={score[1]} homeScore={score[0]}></Score>
                    <Inning inning={inning}/>
                    <Bases loaded={bases}></Bases>
                    <Counts balls={balls} strikes={strikes} outs={outs}/>
                </div>
            </div>
            <Control
                state={state}
                handleBallClick={() => {
                    if (balls === 3) {
                        setBalls(0);

                        return;
                    }

                    setBalls(balls + 1);
                }
                }
                handleOutClick={() => {
                    if (outs === 2) {
                        setOuts(0);

                        return;
                    }

                    setOuts(outs + 1);
                }
                }
                handleStrikeClick={() => {
                    if (strikes === 2) {
                        setStrikes(0);

                        return;
                    }

                    setStrikes(strikes + 1);
                }
                }
                handleTeamNameChange={(type, name) => {
                    if (type === 'home') {
                        setHome(name);

                        return;
                    }

                    setAway(name)
                }
                }
                handleClearBases={() => {
                    setBases([])
                }
                }
                handleResetCountClick={() => {
                    setStrikes(0);
                    setBalls(0)
                }
                }
                handleInningChange={(half, value) => {
                    setInning({half, value})
                }
                }
                handleScoreChange={(team, value) => {
                    if (team === 'home') {
                        setScore([value, score[1]])

                        return;
                    }

                    setScore([score[0], value])
                }}
                handleBaseChange={(base, value) => {
                    if (value) {
                        setBases([...bases, base]);

                        return;
                    }

                    setBases(bases.filter((v) => v !== base));
                }}
            />
            <SponsorTicker images={sponsors}/>
            <SponsorsControl
              handleFileUpload={(files) => setSponsors(files)}
            />
        </div>
    );
}

export default App;
