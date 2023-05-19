import { State } from "./model/State";
import { generateGradient } from "../service/css";

interface Props {
  state: State,
}

export const Score = ({ state }: Props) => {
  const { homeLogo, awayLogo, home, away, score } = state;
  const [homeScore, awayScore] = score;

  return (
    <div className="score-container">
      <div style={{
        display: "flex",
        background: generateGradient(state.awayGradient)
      }} className="score-row">
        <div className="away-logo logo">
          {awayLogo && <img src={awayLogo} alt="" height={"100%"} style={{
            filter: `drop-shadow(2px 2px 0px ${state.awayLogoShadow[0]}88) drop-shadow(0px 0px 3px ${state.awayLogoShadow[1]})`
          }} />}
        </div>
        <div className="name-away score-name" style={{ color: state.fontColorLight }}>
          {away}
        </div>
        <div className="score-away score-value" style={{
          color: state.fontColorDark,
          background: generateGradient(state.layoutGradient)
        }}>
          {awayScore}
        </div>
      </div>

      <div style={{
        display: "flex",
        background: generateGradient(state.homeGradient)
      }} className="score-row">
        <div className="home-logo logo">
          {homeLogo && <img src={homeLogo} alt="" height={"100%"} style={{
            filter: `drop-shadow(2px 2px 0px ${state.homeLogoShadow[0]}88) drop-shadow(0px 0px 3px ${state.homeLogoShadow[1]})`
          }} />}
        </div>
        <div className="name-home score-name" style={{ color: state.fontColorLight }}>
          {home}
        </div>
        <div className="score-home score-value" style={{
          color: state.fontColorDark,
          background: generateGradient(state.layoutGradient)
        }}>
          {homeScore}
        </div>
      </div>
    </div>
  );
};
