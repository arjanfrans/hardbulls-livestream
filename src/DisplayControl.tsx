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
        <div>Active Base Color</div>
        <ColorPicker color={state.activeBaseColor} onChange={(color) => handleChange("activeBaseColor", color)} />
        <div>Inactive Base Color</div>
        <ColorPicker color={state.inactiveBaseColor} onChange={(color) => handleChange("inactiveBaseColor", color)} />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>Font Color Light</div>
        <ColorPicker color={state.fontColorLight} onChange={(color) => handleChange("fontColorLight", color)} />
        <div>Font Color Dark</div>
        <ColorPicker color={state.fontColorDark} onChange={(color) => handleChange("fontColorDark", color)} />
      </div>

      <div>
        Home Logo Shadow<GradientPicker startColor={state.homeLogoShadow[0]} endColor={state.homeLogoShadow[1]}
                                        onChange={(startColor, endColor) => handleChange("homeLogoShadow", [startColor, endColor])} />
      </div>
      <div>
        Away Logo Shadow<GradientPicker startColor={state.awayLogoShadow[0]} endColor={state.awayLogoShadow[1]}
                                        onChange={(startColor, endColor) => handleChange("awayLogoShadow", [startColor, endColor])} />
      </div>
      <div>
        Home Gradient<GradientPicker startColor={state.homeGradient[0]} endColor={state.homeGradient[1]}
                                     onChange={(startColor, endColor) => handleChange("homeGradient", [startColor, endColor])} />
      </div>
      <div>
        Away Gradient<GradientPicker startColor={state.awayGradient[0]} endColor={state.awayGradient[1]}
                                     onChange={(startColor, endColor) => handleChange("awayGradient", [startColor, endColor])} />
      </div>
      <div>
        Layout Gradient<GradientPicker startColor={state.layoutGradient[0]} endColor={state.layoutGradient[1]}
                                       onChange={(startColor, endColor) => handleChange("layoutGradient", [startColor, endColor])} />
      </div>
      <div>
        Background Gradient<GradientPicker startColor={state.backgroundGradient[0]}
                                           endColor={state.backgroundGradient[1]}
                                           onChange={(startColor, endColor) => handleChange("backgroundGradient", [startColor, endColor])} />
      </div>

    </div>
  );
};
