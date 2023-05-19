import React from "react";
import { State } from "./baseball/model/State";
import { GradientPicker } from "./GradientPicker";

import { ColorPicker } from "./ColorPicker";
import { convertFileToBase64 } from "./service/file-to-base64";

interface Props {
  state: State,
  handleChange: <T extends keyof State>(key: T, value: State[T]) => void;
}

const FONTS = [
  "EurostileBold",
  "NeueAachenBlack"
];

export const DisplayControl = ({ handleChange, state }: Props) => {
  const handleFontSelect = async (name: string) => {
      const fontBlob = await (await fetch(`${window.location.origin}/fonts/${name}.woff2`)).blob();
      const encodedFont = await convertFileToBase64(fontBlob);

      handleChange("font", {
        name: name,
        data: encodedFont
      });

      const font = new FontFace(name, `url("${encodedFont}") format("woff2")`);
      const loadedFont = await font.load();

      document.fonts.add(loadedFont);
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button onClick={() => handleChange("hideCounts", !state.hideCounts)}>
          {state.hideCounts ? "Show" : "Hide"} counts
        </button>
        <button onClick={() => handleChange("hideBases", !state.hideBases)}>
          {state.hideBases ? "Show" : "Hide"} bases
        </button>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          Font Family
        </div>
        <div>
          <select value={state.font?.name} onChange={(event) => handleFontSelect(event.target.value)}>
            {FONTS.map(font => (
              <option key={font} value={font}>{font}</option>
            ))}
          </select>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>Filter color (greenscreen: 0, 255, 0)</div>
        <ColorPicker color={state.filterColor} onChange={(color) => handleChange("filterColor", color)} />
      </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>Active Indicator Color</div>
        <ColorPicker color={state.activeIndicatorColor} onChange={(color) => handleChange("activeIndicatorColor", color)} />
        <div>Inactive Indicator Color</div>
        <ColorPicker color={state.inactiveIndicatorColor} onChange={(color) => handleChange("inactiveIndicatorColor", color)} />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>Font Color Light</div>
        <ColorPicker color={state.fontColorLight} onChange={(color) => handleChange("fontColorLight", color)} />
        <div>Font Color Dark</div>
        <ColorPicker color={state.fontColorDark} onChange={(color) => handleChange("fontColorDark", color)} />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
        Home Logo Shadow
        <ColorPicker color={state.homeLogoShadow[0]} onChange={(color) => handleChange("homeLogoShadow", [color, state.homeLogoShadow[1]])} />
        <ColorPicker color={state.homeLogoShadow[1]} onChange={(color) => handleChange("homeLogoShadow", [state.homeLogoShadow[0], color])} />
        </div>
        <div>
        Away Logo Shadow
        <ColorPicker color={state.awayLogoShadow[0]} onChange={(color) => handleChange("awayLogoShadow", [color, state.awayLogoShadow[1]])} />
        <ColorPicker color={state.awayLogoShadow[1]} onChange={(color) => handleChange("awayLogoShadow", [state.awayLogoShadow[0], color])} />
        </div>
      </div>
      <div>
        Home Gradient
        <GradientPicker
          gradient={state.homeGradient}
          onChange={(gradient) => handleChange("homeGradient", gradient)}
        />
      </div>
      <div>
        Away Gradient
        <GradientPicker
          gradient={state.awayGradient}
          onChange={(gradient) => handleChange("awayGradient", gradient)}
        />
      </div>
      <div>
        Layout Gradient
        <GradientPicker
          gradient={state.layoutGradient}
          onChange={(gradient) => handleChange("layoutGradient", gradient)}
        />
      </div>
      <div>
        Background Gradient
        <GradientPicker
          gradient={state.backgroundGradient}
          onChange={(gradient) => handleChange("backgroundGradient", gradient)}
        />
      </div>
    </div>
  );
};
