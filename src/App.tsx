import React from 'react';
import {Bases} from "./baseball/Bases";
import {useState} from 'react';
import {BaseEnum} from "./baseball/model/BasesEnum";
import {Control} from "./baseball/Control";
import {Score} from "./baseball/Score";
import {Inning} from "./baseball/Inning";
import {InningHalfEnum} from "./baseball/model/InningHalfEnum";
import {InningValue} from "./baseball/model/Inning";
import {Counts} from "./baseball/Counts";

function App() {
    const [bases, setBases] = useState<BaseEnum[]>([])
    const [home, setHome] = useState<string>('HB');
    const [away, setAway] = useState<string>('DI');
    const [score, setScore] = useState<[number, number]>([0, 0]);
    const [inning, setInning] = useState<InningValue>({ half: InningHalfEnum.TOP, value: 1});
    const [outs, setOuts] = useState<number>(0);
    const [strikes, setStrikes] = useState<number>(0);
    const [balls, setBalls] = useState<number>(0);

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
                bases={bases}
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
                    setInning({ half, value })
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
        </div>
    );
}

export default App;
