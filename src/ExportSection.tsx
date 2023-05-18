import React from "react";
import { State } from "./baseball/model/State";
import { downloadFile } from "./service/download-file";

interface Props {
  state: State,
  handleReset: () => void,
  handleLoadPreset: (presetState: State) => void
}

const downloadPreset = async (name: string ) => {
    const response = await fetch(`${window.location.origin}/presets/${name}`)

  return await response.json()
}

export const ExportSection = ({ state, handleReset, handleLoadPreset }: Props) => {
  const presets = [
    'BULLS_DUCKS.json',
    'BULLS_INDIANS.json'
  ];

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <button onClick={() => handleReset()}>
            Reset Settings
          </button>
          <button onClick={() => downloadFile(`${state.home}_${state.away}`,JSON.stringify(state))}>Export Settings</button>
        </div>
        <div>
          Load preset
          <select onChange={async (event) => {
            if (event.target.value) {
              handleLoadPreset(await downloadPreset(event.target.value))
            }
          }}>
            <option></option>
            {presets.map(preset => (
              <option key={preset} value={preset}>{preset}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};
