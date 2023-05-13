import { State } from "./model/State";

interface Props {
  state: State,
}

export const Score = ({ state }: Props) => {
  const { homeLogo, awayLogo, home, away, score } = state;
  const [homeScore, awayScore] = score;

  return (
    <div className="score-container">
      <div style={{ display: "flex", background: `linear-gradient(0deg, ${state.awayGradient[0]}ff 0%, ${state.awayGradient[1]}ff 100%)`} } className="score-row">
        <div className="away-logo logo">
          {awayLogo && <img src={awayLogo} alt="" height={"100%"} />}
        </div>
        <div className="name-away score-name">
          {away}
        </div>
        <div className="score-away score-value" style={{

          background: `linear-gradient(0deg, ${state.layoutGradient[0]}ff 0%, ${state.layoutGradient[1]}ff 100%)`
        }}>
          {awayScore}
        </div>
      </div>

      <div style={{ display: "flex", background: `linear-gradient(0deg, ${state.homeGradient[0]}ff 0%, ${state.homeGradient[1]}ff 100%)`} } className="score-row">
        <div className="home-logo logo">
          {homeLogo && <img src={homeLogo} alt="" height={"100%"} />}
        </div>
        <div className="name-home score-name">
          {home}
        </div>
        <div className="score-home score-value" style={{
          background: `linear-gradient(0deg, ${state.layoutGradient[0]}ff 0%, ${state.layoutGradient[1]}ff 100%)`
        }}>
          {homeScore}
        </div>
      </div>
    </div>
  );
};
