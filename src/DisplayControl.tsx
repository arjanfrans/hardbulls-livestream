import React from "react";
import { State } from "./baseball/model/State";
import { GradientPicker } from "./GradientPicker";
import { CssGenerator } from "./CssGenerator";
import { ColorPicker } from "./ColorPicker";
interface Props {
  state: State,
  handleChange: (key: keyof State, value: string|boolean|string[]) => void;
}

export const DisplayControl = ({handleChange, state}: Props) => {
  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
        <button onClick={() => handleChange('hideCounts', !state.hideCounts)}>
          {state.hideCounts ? 'Show' : 'Hide'} counts
        </button>
        <button onClick={() => handleChange('hideBases', !state.hideBases)}>
          {state.hideBases ? 'Show' : 'Hide'} bases
        </button>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div>Filter color (greenscreen: 0, 255, 0)</div>
        <ColorPicker color={state.filterColor} onChange={(color) => handleChange('filterColor', color)}/>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div>Font Color Light</div>
        <ColorPicker color={state.fontColorLight} onChange={(color) => handleChange('fontColorLight', color)}/>
        <div>Font Color Dark</div>
        <ColorPicker color={state.fontColorDark} onChange={(color) => handleChange('fontColorDark', color)}/>
      </div>
      <div>
        Home Gradient<GradientPicker startColor={state.homeGradient[0]} endColor={state.homeGradient[1]} onChange={(startColor, endColor) => handleChange('homeGradient', [startColor, endColor])}/>
      </div>
      <div>
        Away Gradient<GradientPicker startColor={state.awayGradient[0]} endColor={state.awayGradient[1]} onChange={(startColor, endColor) => handleChange('awayGradient', [startColor, endColor])}/>
      </div>
      <div>
        Layout Gradient<GradientPicker startColor={state.layoutGradient[0]} endColor={state.layoutGradient[1]} onChange={(startColor, endColor) => handleChange('layoutGradient', [startColor, endColor])}/>
      </div>
      <div>
        Background Gradient<GradientPicker startColor={state.backgroundGradient[0]} endColor={state.backgroundGradient[1]} onChange={(startColor, endColor) => handleChange('backgroundGradient', [startColor, endColor])}/>
      </div>

      <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
            <div>
              Home Team ID
            </div>
            <input
                type="text"
                value={state.homeTeamId}
                onChange={(event) => handleChange('homeTeamId', event.currentTarget.value)}
            />
                        <div>
              Away Team ID
            </div>
            <input
                type="text"
                value={state.awayTeamId}
                onChange={(event) => handleChange('awayTeamId', event.currentTarget.value)}
            />
        </div>
      <CssGenerator state={state}/>
    </div>
  )
}
