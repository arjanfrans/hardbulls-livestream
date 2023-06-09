import React, { useEffect, useState } from "react";
import { Bases } from "./baseball/Bases";
import { Control } from "./baseball/Control";
import { Score } from "./baseball/Score";
import { Inning } from "./baseball/Inning";
import { Counts } from "./baseball/Counts";
import { State } from "./baseball/model/State";
import { LogoUpload } from "./baseball/LogoUpload";
import { DisplayControl } from "./DisplayControl";
import { CssGenerator } from "./CssGenerator";
import { TickerControl } from "./TickerControl";
import { PublishSection } from "./PublishSection";
import { DEFAULT_OBS_SOCKET, DEFAULT_STATE } from "./default-state";
import { ExportSection } from "./ExportSection";
import { generateGradient } from "./service/css";
import { setObs } from "./service/obs/obs-client";
import { enhanceState, saveState } from "./state";
import PACKAGE_JSON from "../package.json";
import { refreshBrowsers } from "./service/obs/obs-api";

interface Props {
  initialState: State;
}

function App({ initialState }: Props) {
  const [state, setState] = useState<State>(initialState);

  useEffect(() => {
    saveState(state);
  }, [state]);

  useEffect(() => {
    const containerElement = document.querySelector(".app-container") as HTMLElement;

    if (containerElement) {
      containerElement.style.backgroundColor = state.filterColor;
    }
  }, [state]);

  useEffect(() => {
    if (state.refreshTime) {
      const interval = setInterval(async () => {
        if (state.refreshTime) {
          const [hour, minute] = state.refreshTime.split(":");

          const now = new Date();

          if (now.getHours() === Number.parseInt(hour) && now.getMinutes() === Number.parseInt(minute)) {
            await refreshBrowsers();

            setState({
              ...state,
              refreshTime: undefined
            });
          }
        }
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [state]);

  return (
    <div className="app-container">
      <div className="scoreboard" style={{
        fontFamily: `${state.font?.name}, sans-serif`,
        lineHeight: state.fontLineHeight
      }}>
        <div className="scoreboard-top" style={{
          background: generateGradient(state.backgroundGradient)
        }}>
          <Score state={state}></Score>
          <Inning state={state} />
          {!state.hideBases && <Bases state={state}></Bases>}
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
          <LogoUpload type={"home"} value={state.homeLogo?.name}
                      handleFileUpload={file => setState({ ...state, homeLogo: file })} />
          <LogoUpload type={"away"} value={state.awayLogo?.name}
                      handleFileUpload={(file) => setState({ ...state, awayLogo: file })} />
          <hr />
          <DisplayControl state={state} handleChange={(key, value) => setState({ ...state, [key]: value })} />
          <hr />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
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
          Add a scene for the overlay: `hb_overlay`<br />
          Add two browser sources: `hb_score` and `hb_players`<br/>
          For lineups, add browser source: `hb_lineup`
          <hr />
          <ExportSection
            state={state}
            handleLoadPreset={async (presetState: State) => {
              setState(await enhanceState(presetState));
            }}
            handleReset={() => {
              setState(DEFAULT_STATE);
            }} />
          <hr />
          <PublishSection state={state} />
          <hr />
          <div>
            <a href="./transitions/logo-drop.webm" download>Download Transition</a>
          </div>
          <hr />
          <div>
            {PACKAGE_JSON.name}@v{PACKAGE_JSON.version} - &copy; {PACKAGE_JSON.author?.name} {new Date().getFullYear()}
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
