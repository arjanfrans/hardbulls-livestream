interface Props {
  filterColor: string
  handleFilterColorChange: (color: string) => void
}

export const FilterColor = ({filterColor, handleFilterColorChange}: Props) => {
  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div>Filter color</div>
        <div>
          <input
            type="color"
            value={filterColor}
            onChange={(event) => handleFilterColorChange(event.currentTarget.value)}
          />
        </div>
      </div>
    </div>
  )
}
