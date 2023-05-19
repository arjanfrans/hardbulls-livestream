import { useState } from "react"
import { Gradient } from "./baseball/model/Gradient";
import { generateGradient } from "./service/css";

interface Props {
    gradient: Gradient,
    onChange: (gradient: Gradient) => void
}

export const GradientPicker = ({gradient, onChange}: Props) => {
  const [selectedGradient, setGradient] = useState<Gradient>(gradient)

  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <input
            type="color"
            value={gradient.startColor}
            onChange={(event) => setGradient({ ...selectedGradient, startColor: event.target.value})}
            onBlur={() => onChange(selectedGradient)}
          />
        <input
            type="color"
            value={gradient.endColor}
            onChange={(event) => setGradient({ ...selectedGradient, endColor: event.target.value})}
            onBlur={() => onChange(selectedGradient)}
          />
          Angle
          <input
            type="number"
            value={gradient.angle}
            onChange={(event) => onChange({ ...gradient, angle: event.target.valueAsNumber})}
            step={5}
            style={{
              width: '3em'
            }}
          />
          %
          <input
            type="range"
            min={0}
            step={10}
            max={100}
            value={gradient.startPercentage}
            onChange={(event) => onChange({ ...gradient, startPercentage: event.target.valueAsNumber})}
          />
          %
          <input
            type="range"
            min={0}
            step={10}
            max={100}
            value={gradient.endPercentage}
            onChange={(event) => onChange({ ...gradient, endPercentage: event.target.valueAsNumber})}
          />
        </div>
        <div style={{
          background: generateGradient(gradient)
        }}>
            <input type="text" disabled value={generateGradient(gradient)}></input>
        </div>
      </div>
    </div>
  )
}
