import { useState } from "react"
export default function Player({initName,symbol,isActivePlayer,onChangeName}) {

    const [playerName,setPlayerName] = useState(initName)
    const [isEditing, setIsEditing] = useState(false)
    function handleEditClick(){
        setIsEditing((editing) => !editing)
        if(isEditing) {
            onChangeName(symbol,playerName)
        }
    }
    function handleChange(event) {
        setPlayerName(event.target.value)
        
    }
    let editablePlayerName = <span className="player-name">{playerName}</span>

    if (isEditing) {
        editablePlayerName = <input type="text" require value={playerName} onChange={handleChange}/>
    }
    return (
        <li className={isActivePlayer ? 'active' : undefined }>
            <span className="player">
            {editablePlayerName}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing?'Save':'Edit'}</button>
          </li>
    )
}