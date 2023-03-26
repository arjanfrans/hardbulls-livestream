import { State } from "./baseball/model/State";

interface Props {
  state: State;
  handleElementChange: (key: string, value: string) => void;
}

export const ObserveControl = ({state, handleElementChange}: Props) => {
  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div>Home Element</div>
        <div>
          <input type="text" value={state.observeSettings.home} onChange={(event) => handleElementChange('home', event.target.value)}></input>
        </div>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div>Away Element</div>
        <div>
          <input type="text" value={state.observeSettings.away} onChange={(event) => handleElementChange('away', event.target.value)}></input>
        </div>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div>Out Element</div>
        <div>
          <input type="text" value={state.observeSettings.outs} onChange={(event) => handleElementChange('outs', event.target.value)}></input>
        </div>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div>Inning Element</div>
        <div>
          <input type="text" value={state.observeSettings.inning} onChange={(event) => handleElementChange('inning', event.target.value)}></input>
        </div>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div>Strikes Element</div>
        <div>
          <input type="text" value={state.observeSettings.strikes} onChange={(event) => handleElementChange('strikes', event.target.value)}></input>
        </div>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div>Balls Element</div>
        <div>
          <input type="text" value={state.observeSettings.balls} onChange={(event) => handleElementChange('balls', event.target.value)}></input>
        </div>
      </div>
    </div>
  )
}
