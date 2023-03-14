interface Props {
    homeName: string,
    awayName: string
    homeScore: number
    awayScore: number
  homeLogo?: string
  awayLogo?: string
}
export const Score = ({homeLogo, awayLogo, homeName, awayName, homeScore, awayScore}: Props) => {
   return (
       <div className="score-container">
           <div style={{display: 'flex'}} className="score-row">
              <div className="home-logo logo">
                {homeLogo && <img src={homeLogo} alt="" height={'100%'}/>}
              </div>
               <div className="name-home score-name">
                   {homeName}
               </div>
               <div className="score-home score-value">
                   {homeScore}
               </div>
           </div>

           <div style={{display: 'flex'}} className="score-row">
             <div className="away-logo logo">
               {awayLogo && <img src={awayLogo} alt="" height={'100%'}/>}
             </div>
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
