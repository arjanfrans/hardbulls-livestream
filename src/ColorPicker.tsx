import { useState } from "react";

interface Props {
  color: string;
  onChange: (color: string) => void;
}

export const ColorPicker = ({ color, onChange }: Props) => {
  const [selectedColor, setSelectedColor] = useState<string>(color);

  return (
    <div>
      <input
        type="color"
        value={color}
        onChange={(event) => setSelectedColor(event.currentTarget.value)}
        onBlur={() => onChange(selectedColor)}
      />
    </div>
  );
};
