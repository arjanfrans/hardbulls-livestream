import {InningValue} from "./model/Inning";
import {InningHalfEnum} from "./model/InningHalfEnum";

interface Props {
    inning: InningValue
}

const renderInningSvg = (inningHalf: InningHalfEnum, isCurrent: boolean) => {
    const upPoints = '5,0 0,7 10,7';
    const downPoints = '5,7 10,0 0,0';
    const activeColor = '#ff0000';
    const inactiveColor = '#ccc';

    return (
        <svg viewBox="0 0 10 7" fill={isCurrent ? activeColor : inactiveColor} width={32} height={32}
        >
            <polygon points={inningHalf === InningHalfEnum.TOP ? upPoints: downPoints}>
            </polygon>
        </svg>
    )
}
export const Inning = ({inning}: Props) => {
    return (
        <div className="inning-container">
            <div style={{marginBottom: '-14px'}}>
                {renderInningSvg(InningHalfEnum.TOP, inning.half === InningHalfEnum.TOP)}
            </div>
            <div>
                {inning.value}
            </div>
            <div style={{marginTop: '-8px'}}>
                {renderInningSvg(InningHalfEnum.BOTTOM, inning.half === InningHalfEnum.BOTTOM)}
            </div>
        </div>
    );
}
