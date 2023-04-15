import { State } from "./baseball/model/State";

interface Props {
  state: State;
  handleDelayChange: (value: number) => void;
  handleElementChange: (key: string, value: string) => void;
}

export const ObserveControl = ({state, handleElementChange, handleDelayChange}: Props) => {
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
        <div>Counts Element</div>
        <div>
          <input type="text" value={state.observeSettings.counts} onChange={(event) => handleElementChange('counts', event.target.value)}></input>
        </div>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div>Base1 Element</div>
        <div>
          <input type="text" value={state.observeSettings.base1} onChange={(event) => handleElementChange('base1', event.target.value)}></input>
        </div>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div>Base2 Element</div>
        <div>
          <input type="text" value={state.observeSettings.base2} onChange={(event) => handleElementChange('base2', event.target.value)}></input>
        </div>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div>Base3 Element</div>
        <div>
          <input type="text" value={state.observeSettings.base3} onChange={(event) => handleElementChange('base3', event.target.value)}></input>
        </div>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div>Ticker Delay</div>
        <div>
          <input type="text" value={state.observerDelay} onChange={(event) => handleDelayChange(Number.parseInt(event.target.value))}></input>
        </div>
      </div>
    </div>
  )
}
