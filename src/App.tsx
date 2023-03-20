import React, { useEffect } from "react";
import { Bases } from "./baseball/Bases";
import { useState } from "react";
import { Control } from "./baseball/Control";
import { Score } from "./baseball/Score";
import { Inning } from "./baseball/Inning";
import { InningHalfEnum } from "./baseball/model/InningHalfEnum";
import { Counts } from "./baseball/Counts";
import { State } from "./baseball/model/State";
import { LogoUpload } from "./baseball/LogoUpload";
import { FilterColor } from "./baseball/FilterColor";
import { ObserveControl } from "./ObserveControl";
import { ObserveSettings } from "./ObserveSettings";
import { observeElements } from "./observe";

const savedState = localStorage.getItem("state");
let initialState = savedState ? JSON.parse(savedState) : {
  bases: [],
  home: "",
  away: "",
  score: [0, 0],
  inning: {
    value: 0,
    half: InningHalfEnum.TOP
  },
  outs: 0,
  strikes: 0,
  balls: 0,
  homeLogo: undefined,
  awayLogo: undefined,
  filterColor: "#00ff00"
};


function App() {
  const [observe, setObserve] = useState<boolean>(false);
  const [observeSettings, setObserveSettings] = useState<ObserveSettings>({});
  const [away, setAway] = useState<string>(initialState.away);
  const [homeLogo, setHomeLogo] = useState<string | undefined>(initialState.homeLogo);
  const [awayLogo, setAwayLogo] = useState<string | undefined>(initialState.awayLogo);
  const [filterColor, setFilterColor] = useState<string>(initialState.filterColor);

  const [state, setState] = useState<State>(initialState);

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  useEffect(() => {
    const containerElement = document.querySelector('.app-container') as HTMLElement

    if (containerElement) {
      containerElement.style.backgroundColor = filterColor;
    }
  }, [filterColor])

  useEffect(() => {
    if (observe) {
      observeElements(observeSettings, (key, value) => {
        setState({
          ...state,
          [key]: value
        })
      })
    }
  }, [observe, observeSettings, state]);

  return (
    <div className="app-container">
      <div className="scoreboard">
        <div className="scoreboard-top">
          <Score homeLogo={homeLogo} awayLogo={awayLogo} homeName={state.home} awayName={away} awayScore={state.score[1]}
                 homeScore={state.score[0]}></Score>
          <Inning inning={state.inning} />
          <Bases loaded={state.bases}></Bases>
          <Counts balls={state.balls} strikes={state.strikes} outs={state.outs} />
        </div>
      </div>
      <div className="settings-container">
        <Control
          state={state}
          handleBallClick={() => {
            if (state.balls === 3) {
              setState({
                ...state,
                balls: 0
              })

              return;
            }

            setState({
              ...state,
              balls: state.balls + 1
            })
          }
          }
          handleOutClick={() => {
            if (state.outs === 2) {
              setState({
                ...state,
                outs: 0
              });

              return;
            }

            setState({
              ...state,
              outs: state.outs + 1
            })
          }
          }
          handleStrikeClick={() => {
            if (state.strikes === 2) {
              setState({
                ...state,
                strikes: 0
              })

              return;
            }

            setState({
              ...state,
              strikes: state.strikes + 1
            })
          }
          }
          handleTeamNameChange={(type, name) => {
            if (type === "home") {
              setState({
                ...state,
                home: name
              })

              return;
            }

            setAway(name);

            setState({
              ...state,
              away: name
            })
          }
          }
          handleClearBases={() => {
            setState({
              ...state,
              bases: []
            })
          }
          }
          handleResetCountClick={() => {
            setState({
              ...state,
              strikes: 0,
              balls: 0
            })
          }
          }
          handleInningChange={(half, value) => {
            setState({
              ...state,
              inning: { half, value }
            })
          }}
          handleScoreChange={(team, value) => {
            if (team === "home") {
              setState({
                ...state,
                score: [value, state.score[1]]
              })

              return;
            }

            setState({
              ...state,
              score: [state.score[0], value]
            })
          }}
          handleBaseChange={(base, value) => {
            if (value) {
              setState({
                ...state,
                bases: [...state.bases, base]
              })

              return;
            }

            setState({
              ...state,
              bases: state.bases.filter((v) => v !== base)
            });
          }}
        />
        <LogoUpload type={"home"} value={homeLogo} handleFileUpload={file => setHomeLogo(file)} />
        <LogoUpload type={"away"} value={awayLogo} handleFileUpload={(file) => setAwayLogo(file)} />
        <FilterColor filterColor={filterColor} handleFilterColorChange={(color) => setFilterColor(color)} />
        <hr/>

        <button onClick={() => setObserve(!observe) }>Follow Ticker</button><br/>
        <ObserveControl handleElementChange={(key, value) => setObserveSettings({
          ...observeSettings,
          [key]: value
        })}
        />
      </div>
    </div>
  );
}

export default App;
