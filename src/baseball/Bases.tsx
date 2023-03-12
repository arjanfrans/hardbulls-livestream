import {BaseEnum} from "./model/BasesEnum";

interface Props {
    loaded: BaseEnum[]
}

export const Bases = ({loaded}: Props) => {
    return (
        <div className="base-container">
            <div className="base-rotate-wrapper">
                <div id="first-base" className={`base ${loaded.includes(BaseEnum.FIRST) ? 'base-on' : 'base-off'}`}></div>
                <div id="second-base" className={`base ${loaded.includes(BaseEnum.SECOND) ? 'base-on' : 'base-off'}`}></div>
                <div id="third-base" className={`base ${loaded.includes(BaseEnum.THIRD) ? 'base-on' : 'base-off'}`}></div>
            </div>
        </div>
    )
}
