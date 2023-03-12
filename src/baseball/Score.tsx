interface Props {
    homeName: string,
    awayName: string
    homeScore: number
    awayScore: number
}
export const Score = ({homeName, awayName, homeScore, awayScore}: Props) => {
   return (
       <div className="score-container">
           <div style={{display: 'flex'}} className="score-row">
               <div className="name-home score-name">
                   {homeName}
               </div>
               <div className="score-home score-value">
                   {homeScore}
               </div>
           </div>

           <div style={{display: 'flex'}} className="score-row">
               <div className="name-away score-name">
                   {awayName}
               </div>
               <div className="score-away score-value">
                   {awayScore}
               </div>
           </div>
       </div>
   )
}
