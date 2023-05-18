import { BaseEnum } from "./model/BasesEnum";
import { State } from "./model/State";

interface Props {
  state: State
}

export const Bases = ({ state }: Props) => {
  const activeBaseStyle = {
    backgroundColor: state.activeBaseColor
  };

  const inactiveBaseStyle = {
    backgroundColor: state.inactiveBaseColor
  };

  return (
    <div className="base-container">
      <div className="base-rotate-wrapper">
        <div id="first-base" style={state.bases.includes(BaseEnum.FIRST) ? activeBaseStyle : inactiveBaseStyle} className="base"></div>
        <div id="second-base" style={state.bases.includes(BaseEnum.SECOND) ? activeBaseStyle : inactiveBaseStyle} className="base"></div>
        <div id="third-base" style={state.bases.includes(BaseEnum.THIRD) ? activeBaseStyle : inactiveBaseStyle} className="base"></div>
      </div>
    </div>
  );
};
