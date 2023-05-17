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
import { CssGenerator } from "./CssGenerator";
import { TickerControl } from "./TickerControl";
import { setObs } from "./obs";

const DEFAULT_OBS_SOCKET = "ws://127.0.0.1:4455";

const savedState = localStorage.getItem("state");

let parsedSavedState = null;

try {
  parsedSavedState = savedState && JSON.parse(savedState);
} catch (error) {
}


let initialState = parsedSavedState ? parsedSavedState : {
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
  awayTeamId: "",
  homeTeamId: "24492",
  hideBases: false,
  hideCounts: false,
  homeGradient: ["#dd0808", "#ff5c5c"],
  awayGradient: ["#0f6709", "#078834"],
  layoutGradient: ["#8f8f8f", "#b0b0b0"],
  backgroundGradient: ["#000000", "#474747"],
  fontColorLight: "#f3f3f3",
  fontColorDark: "#333333",
  obsSocket: DEFAULT_OBS_SOCKET
};

setObs(initialState.obsSocket).catch((err) => console.error(err));

function App() {
  const [state, setState] = useState<State>(initialState);

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  useEffect(() => {
    const containerElement = document.querySelector(".app-container") as HTMLElement;

    if (containerElement) {
      containerElement.style.backgroundColor = state.filterColor;
    }
  }, [state]);

  return (
    <div className="app-container">
      <div className="scoreboard">
        <div className="scoreboard-top" style={{
          background: `linear-gradient(0deg, ${state.backgroundGradient[0]}ff 0%, ${state.backgroundGradient[1]}ff 100%)`
        }}>
          <Score state={state}></Score>
          <Inning state={state} />
          {!state.hideBases && <Bases loaded={state.bases}></Bases>}
          {!state.hideCounts && <Counts state={state} />}
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }} className="settings-container">
        <div>

          <Control
            state={state}
            handleBallClick={() => {
              if (state.balls === 3) {
                setState({
                  ...state,
                  balls: 0
                });

                return;
              }

              setState({
                ...state,
                balls: state.balls + 1
              });
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
              });
            }
            }
            handleStrikeClick={() => {
              if (state.strikes === 2) {
                setState({
                  ...state,
                  strikes: 0
                });

                return;
              }

              setState({
                ...state,
                strikes: state.strikes + 1
              });
            }
            }
            handleTeamNameChange={(type, name) => {
              if (type === "home") {
                setState({
                  ...state,
                  home: name
                });

                return;
              }

              setState({
                ...state,
                away: name
              });
            }
            }
            handleClearBases={() => {
              setState({
                ...state,
                bases: []
              });
            }
            }
            handleResetCountClick={() => {
              setState({
                ...state,
                strikes: 0,
                balls: 0
              });
            }
            }
            handleInningChange={(half, value) => {
              setState({
                ...state,
                inning: { half, value }
              });
            }}
            handleScoreChange={(team, value) => {
              if (team === "home") {
                setState({
                  ...state,
                  score: [value, state.score[1]]
                });

                return;
              }

              setState({
                ...state,
                score: [state.score[0], value]
              });
            }}
            handleBaseChange={(base, value) => {
              if (value) {
                setState({
                  ...state,
                  bases: [...state.bases, base]
                });

                return;
              }

              setState({
                ...state,
                bases: state.bases.filter((v) => v !== base)
              });
            }}
          />
          <LogoUpload type={"home"} value={state.homeLogo}
                      handleFileUpload={file => setState({ ...state, homeLogo: file })} />
          <LogoUpload type={"away"} value={state.awayLogo}
                      handleFileUpload={(file) => setState({ ...state, awayLogo: file })} />
          <hr />

          <DisplayControl state={state} handleChange={(key, value) => setState({ ...state, [key]: value })} />
          <hr />
          <div style={{ display: "flex", justifyContent: "space-between" }} className="settings-container">
            <div>
              OBS Websocket

            </div>
            <input type="text" placeholder={DEFAULT_OBS_SOCKET} value={state.obsSocket || DEFAULT_OBS_SOCKET}
                   onChange={async (event) => {
                     setState({
                       ...state,
                       obsSocket: event.currentTarget.value
                     });

                     setObs(event.currentTarget.value);
                   }
                   }
            />
          </div>
          <TickerControl state={state} handleChange={(key, value) => setState({ ...state, [key]: value })} />
          <CssGenerator state={state} />
        </div>
        <div>
          Launch OBS with --enable-experimental-web-platform-features<br />
          Add two browser sources: `hb_score` and `hb_players`
        </div>
      </div>

    </div>
  );
}

export default App;
