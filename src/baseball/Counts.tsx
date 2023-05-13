import { State } from "./model/State";

interface Props {
  state: State
}
export const Counts = ({state}: Props) => {
  const {strikes, balls, outs} = state;
  const style = {
    background: `linear-gradient(0deg, ${state.layoutGradient[0]}ff 0%, ${state.layoutGradient[1]}ff 100%)`
  }
    return (
        <div className="counts-container">
            <div className="counts-top" style={style}><span>{balls} - {strikes}</span></div>
            <div className="counts-bottom" style={style}><span>{outs} out</span></div>
        </div>
    )
}
