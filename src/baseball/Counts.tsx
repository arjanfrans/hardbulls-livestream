interface Props {
    strikes: number;
    balls: number;
    outs: number
}
export const Counts = ({strikes, balls, outs}: Props) => {
    return (
        <div className="counts-container">
            <div className="counts-top"><span>{balls} - {strikes}</span></div>
            <div className="counts-bottom"><span>{outs} out</span></div>
        </div>
    )
}
