import { useState } from "react"

interface Props {
  filterColor: string
  handleFilterColorChange: (color: string) => void
}

export const FilterColor = ({filterColor, handleFilterColorChange}: Props) => {
  const [selectedColor, setSelectedColor] = useState<string>(filterColor)

  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div>Filter color (greenscreen: 0, 255, 0)</div>
        <div>
          <input
            type="color"
            value={filterColor}
            onBlur={() => handleFilterColorChange(selectedColor)}
            onChange={(event) => setSelectedColor(event.currentTarget.value) }
          />
        </div>
      </div>
    </div>
  )
}
