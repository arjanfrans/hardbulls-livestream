import { useState } from "react"

interface Props {
    startColor: string
    endColor: string
    onChange: (startColor: string, endColor: string) => void
}

export const GradientPicker = ({startColor, endColor, onChange}: Props) => {
  const [selectedStartColor, setStartColor] = useState<string>(startColor)
  const [selectedEndColor, setEndColor] = useState<string>(endColor)

  const generateGradient = () => {
    return `linear-gradient(0deg, ${selectedStartColor}ff 0%, ${selectedEndColor}ff 100%)`
  }

  return (
    <div style={{background: generateGradient()}}>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <input
            type="color"
            value={selectedStartColor}
            onChange={(event) => setStartColor(event.currentTarget.value)}
            onBlur={() => onChange(selectedStartColor, selectedEndColor)}
          />
        <input
            type="color"
            value={selectedEndColor}
            onChange={(event) => setEndColor(event.currentTarget.value)}
            onBlur={() => onChange(selectedStartColor, selectedEndColor)}
          />
        </div>
        <div>
            <input type="text" disabled value={generateGradient()}></input>
        </div>
      </div>
    </div>
  )
}
