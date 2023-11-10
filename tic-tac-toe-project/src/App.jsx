import { useState } from 'react'
import Player from './components/Player.jsx'
import GameBoard from './components/GameBoard.jsx'
import Log from './components/Log.jsx'
import { WINNING_COMBINATIONS } from './winning-combination.js'
import GameOver from './components/GameOver.jsx'
const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2'
}
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

function deriveActivePlayer(gameTurns) {
  let currentPlayer ="X"
  if (gameTurns.length >0 && gameTurns[0].player === 'X') {
    currentPlayer = "O"
  }
  return currentPlayer
}
function deriveWinner(gameBoard,player){
  let winner = null
  for(const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column]
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column]
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column]
    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol){
      winner = player[firstSquareSymbol]
    }
  }
  return winner
}
function deriveGameBoard(gameTurns) {
  let gameBoard = [...initialGameBoard.map(inner => [...inner])]
  
  for (const turn of gameTurns) {
      const {squre,player} = turn
      const {row,col} = squre
      gameBoard[row][col] = player
  }
  return gameBoard
}
function App() {
  //const [activePlayer,setActivePlayer ] = useState('X')
  const [player, setPlayer] = useState(PLAYERS)
  const [gameTurns, setGameTurns] = useState([])
  const activePlayer = deriveActivePlayer(gameTurns)
  const hasDraw = gameTurns.length === 9 && !winner
  
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard,player)

  function handleSelectSqaure(rowIdx,colIdx) {
    //setActivePlayer((curActivePlayer) => curActivePlayer === 'X'? 'O':'X' )
    setGameTurns((prevTurns) => {
      let currentPlayer = deriveActivePlayer(prevTurns)
      
      const updatedTurns = [
        { squre : {row: rowIdx,col:colIdx}, player :currentPlayer},
        ...prevTurns,
      ]
      return updatedTurns

    })
  }
  function handleRestart() {
    setGameTurns([]);
  }
  function handlePlayerNameChange(symbol,newName) {
    setPlayer(prevPlayer => {
     return {
        ...prevPlayer,
        [symbol] : newName
      }
    })
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initName={PLAYERS.X} symbol="X" isActivePlayer={activePlayer==='X'} onChangeName={handlePlayerNameChange}/>
          <Player initName={PLAYERS.Y} symbol="O" isActivePlayer={activePlayer==='O'} onChangeName={handlePlayerNameChange}/>
        </ol>
        { (winner || hasDraw ) && (<GameOver winner={winner} onRestart={handleRestart} />)}
        <GameBoard onSelectSquare={handleSelectSqaure}  board={gameBoard}/>
      </div>
      <Log turns={gameTurns}></Log>
    </main>
  )
  }
export default App