import {InningHalfEnum} from "./model/InningHalfEnum";
import { State } from "./model/State";
import { generateGradient } from "../service/css";

interface Props {
  state: State
}

const renderInningSvg = (inningHalf: InningHalfEnum, isCurrent: boolean, activeColor: string, inactiveColor: string) => {
    const upPoints = '5,0 0,7 10,7';
    const downPoints = '5,7 10,0 0,0';

    return (
        <svg viewBox="0 0 10 7" fill={isCurrent ? activeColor : inactiveColor} width={32} height={32}
        >
            <polygon points={inningHalf === InningHalfEnum.TOP ? upPoints: downPoints}>
            </polygon>
        </svg>
    )
}
export const Inning = ({state}: Props) => {
  const inning = state.inning;
  const inactiveColor = state.inactiveInningColor
  const activeColor = state.activeInningColor

    return (
        <div className="inning-container" style={{
          color: state.fontColorDark,
          background: generateGradient(state.layoutGradient)
        }}>
            <div style={{marginBottom: '-10px'}}>
                {renderInningSvg(InningHalfEnum.TOP, inning.half === InningHalfEnum.TOP, activeColor, inactiveColor)}
            </div>
            <div>
                {inning.value}
            </div>
            <div style={{marginTop: '-3px'}}>
                {renderInningSvg(InningHalfEnum.BOTTOM, inning.half === InningHalfEnum.BOTTOM, activeColor, inactiveColor)}
            </div>
        </div>
    );
}
