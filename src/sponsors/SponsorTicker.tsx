import './sponsor-ticker.css'
interface Props {
  images: string[]
}

export const SponsorTicker = ({images}: Props) => {
  return (
    <div className="sponsor-ticker">
      {images.map(image => {
        return (
          <img alt="" src={image} height={150} width={150} />
        )
      })}
    </div>
  )
}
