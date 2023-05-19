import { State } from "./model/State";
import { generateGradient } from "../service/css";

interface Props {
  state: State
}
export const Counts = ({state}: Props) => {
  const {strikes, balls, outs} = state;
  const style = {
    color: state.fontColorDark,
    background: generateGradient(state.layoutGradient)
  }
    return (
        <div className="counts-container">
            <div className="counts-top" style={style}>
              <span>{balls}</span>
              <span className="count-separator">-</span>
              <span>{strikes}</span>
            </div>
            <div className="counts-bottom" style={style}>
              <span className="outs-count">{outs}</span>
              <span className="outs-text">out</span>
            </div>
        </div>
    )
}
