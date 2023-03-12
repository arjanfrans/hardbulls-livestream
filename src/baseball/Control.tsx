import {BaseEnum} from "./model/BasesEnum";
import {InningHalfEnum} from "./model/InningHalfEnum";

interface Props {
    bases: BaseEnum[],
    handleScoreChange: (team: 'home' | 'away', value: number) => void;
    handleBaseChange: (base: BaseEnum, value: boolean) => void
    handleInningChange: (half: InningHalfEnum, value: number) => void
    handleOutClick: () => void;
    handleStrikeClick: () => void;
    handleBallClick: () => void;
    handleResetCountClick: () => void;
    handleClearBases: () => void;
    handleTeamNameChange: (type: 'home' | 'away', name: string) => void;
}

export const Control = ({
    bases,
                            handleStrikeClick,
                            handleBallClick,
                            handleOutClick,
                            handleScoreChange,
                            handleBaseChange,
                            handleInningChange,
    handleClearBases,
    handleTeamNameChange,
    handleResetCountClick
                        }: Props) => {
    return (
        <div className="control-container">
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div>Home name</div>
                <div>
                    <input
                        type="text"
                        onChange={(event) => handleTeamNameChange('home', event.currentTarget.value)}
                    />
                </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div>Away name</div>
                <div>
                    <input
                        type="text"
                        onChange={(event) => handleTeamNameChange('away', event.currentTarget.value)}
                    />
                </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div>Home score</div>
                <div>
                    <input
                        type="number"
                        defaultValue={0}
                        onChange={(event) => handleScoreChange('home', Number.parseInt(event.currentTarget.value))}
                    />
                </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div>Away score</div>
                <div>
                    <input defaultValue={0} type="number"
                           onChange={(event) => handleScoreChange('away', Number.parseInt(event.currentTarget.value))}
                    />
                </div>
            </div>

            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div>Inning</div>
                <div>
                    <input type="number"
                           defaultValue={1}
                           step={0.5}
                           onChange={(event) => {
                               const value = Number.parseInt(event.currentTarget.value)

                               if ((Math.round(Number.parseFloat(event.currentTarget.value) * 10) / 10) % 1 === 0) {
                                   handleInningChange(InningHalfEnum.TOP, value)

                                   return
                               }

                               handleInningChange(InningHalfEnum.BOTTOM, value)
                           }}
                    />
                </div>
            </div>

            <div style={{display: 'flex'}}>
                <div>1B</div>
                <div>
                    <input type="checkbox"
                           checked={bases.includes(BaseEnum.FIRST)}
                           onChange={(event) => handleBaseChange(BaseEnum.FIRST, event.currentTarget.checked)}/>
                </div>
                <div>2B</div>
                <div>
                    <input type="checkbox"
                           checked={bases.includes(BaseEnum.SECOND)}
                           onChange={(event) => handleBaseChange(BaseEnum.SECOND, event.currentTarget.checked)}/>
                </div>
                <div>3B</div>
                <div>
                    <input type="checkbox"
                           checked={bases.includes(BaseEnum.THIRD)}
                           onChange={(event) => handleBaseChange(BaseEnum.THIRD, event.currentTarget.checked)}/>
                </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                    <button onClick={handleOutClick}>
                        Out
                    </button>
                    <button onClick={handleStrikeClick}>
                        Strike
                    </button>
                    <button onClick={handleBallClick}>
                        Ball
                    </button>
                    <button onClick={handleResetCountClick}>
                        Reset count
                    </button>
                    <button onClick={handleClearBases}>Clear bases</button>
            </div>
        </div>
    )
}
