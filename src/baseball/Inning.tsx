import {InningHalfEnum} from "./model/InningHalfEnum";
import { State } from "./model/State";

interface Props {
  state: State
}

const renderInningSvg = (inningHalf: InningHalfEnum, isCurrent: boolean, inActiveColor: string) => {
    const upPoints = '5,0 0,7 10,7';
    const downPoints = '5,7 10,0 0,0';
    const activeColor = '#ff0000';

    return (
        <svg viewBox="0 0 10 7" fill={isCurrent ? activeColor : inActiveColor} width={32} height={32}
        >
            <polygon points={inningHalf === InningHalfEnum.TOP ? upPoints: downPoints}>
            </polygon>
        </svg>
    )
}
export const Inning = ({state}: Props) => {
  const inning = state.inning;
  const inActiveColor = state.layoutGradient[1]

    return (
        <div className="inning-container" style={{
          background: `linear-gradient(0deg, ${state.layoutGradient[0]}ff 0%, ${state.layoutGradient[1]}ff 100%)`
        }}>
            <div style={{marginBottom: '-10px'}}>
                {renderInningSvg(InningHalfEnum.TOP, inning.half === InningHalfEnum.TOP, inActiveColor)}
            </div>
            <div>
                {inning.value}
            </div>
            <div style={{marginTop: '-3px'}}>
                {renderInningSvg(InningHalfEnum.BOTTOM, inning.half === InningHalfEnum.BOTTOM, inActiveColor)}
            </div>
        </div>
    );
}
