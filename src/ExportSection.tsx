import React from "react";
import { State } from "./baseball/model/State";
import { downloadFile } from "./service/download-file";
import { getLocaleStorageValue } from "./state";
import { CONFIG } from "./config";

interface Props {
  state: State,
  handleReset: () => void,
  handleLoadPreset: (presetState: State) => void
}

const downloadPreset = async (name: string) => {
  const response = await fetch(`${window.location.origin}/presets/${name}.json`);

  return await response.json();
};

export const ExportSection = ({ state, handleReset, handleLoadPreset }: Props) => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <button onClick={() => handleReset()}>
            Reset Settings
          </button>
          <button
            onClick={() => {
              const savedState = getLocaleStorageValue();

              if (savedState) {
                downloadFile(`${state.home}_${state.away}`, savedState);
              }
            }}>
            Export Settings
          </button>
        </div>
        <div>
          Load preset
          <select onChange={async (event) => {
            if (event.target.value) {
              handleLoadPreset(await downloadPreset(event.target.value));
            }
          }}>
            <option></option>
            {CONFIG.presets.sort().map(preset => (
              <option key={preset} value={preset}>{preset}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};
