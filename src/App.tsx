import React, { useEffect, useState } from "react";
import { Bases } from "./baseball/Bases";
import { Control } from "./baseball/Control";
import { Score } from "./baseball/Score";
import { Inning } from "./baseball/Inning";
import { InningHalfEnum } from "./baseball/model/InningHalfEnum";
import { Counts } from "./baseball/Counts";
import { State } from "./baseball/model/State";
import { LogoUpload } from "./baseball/LogoUpload";
import { DisplayControl } from "./DisplayControl";


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
  filterColor: "#00ff00",
  observe: false,
  hideBases: false,
  hideCounts: false,
  homeGradient: ['#dd0808ff', '#ff5c5cff'],
  awayGradient: ['#0f6709ff', '#078834ff'],
  layoutGradient: ['#8f8f8fff', '#b0b0b0ff'],
  backgroundGradient: ['#000000ff', '#474747ff'],
};


function App() {
  const [state, setState] = useState<State>(initialState);

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  useEffect(() => {
    const containerElement = document.querySelector('.app-container') as HTMLElement

    if (containerElement) {
      containerElement.style.backgroundColor = state.filterColor;
    }
  }, [state])

  return (
    <div className="app-container">
      <div className="scoreboard">
        <div className="scoreboard-top">
          <Score homeLogo={state.homeLogo} awayLogo={state.awayLogo} homeName={state.home} awayName={state.away} awayScore={state.score[1]}
                 homeScore={state.score[0]}></Score>
          <Inning inning={state.inning} />
          {!state.hideBases && <Bases loaded={state.bases}></Bases>}
          {!state.hideCounts && <Counts balls={state.balls} strikes={state.strikes} outs={state.outs} /> }
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
        <LogoUpload type={"home"} value={state.homeLogo} handleFileUpload={file => setState({...state, homeLogo: file })} />
        <LogoUpload type={"away"} value={state.awayLogo} handleFileUpload={(file) => setState({...state, awayLogo: file})} />
        <hr/>

        <DisplayControl state={state} handleChange={(key, value) => setState({...state, [key]: value})}/>
      </div>

    </div>
  );
}

export default App;
