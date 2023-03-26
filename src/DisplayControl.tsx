import React from "react";
import { FilterColor } from "./FilterColor";
import { State } from "./baseball/model/State";

interface Props {
  state: State,
  handleChange: (key: keyof State, value: string|boolean) => void;
}

export const DisplayControl = ({handleChange, state}: Props) => {
  return (
    <div>
      <FilterColor filterColor={state.filterColor} handleFilterColorChange={(color) => handleChange('filterColor', color)} />
      <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
        <button onClick={() => handleChange('hideCounts', !state.hideCounts)}>
          {state.hideCounts ? 'Show' : 'Hide'} counts
        </button>
        <button onClick={() => handleChange('hideBases', !state.hideBases)}>
          {state.hideBases ? 'Show' : 'Hide'} bases
        </button>
      </div>
    </div>
  )
}
