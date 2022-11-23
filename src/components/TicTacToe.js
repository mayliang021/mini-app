import React, {useEffect, useState} from "react";
import { GiPodiumWinner } from 'react-icons/gi';

const TicTacToe = () => {
  const [winner, setWinner] = useState()
  const [isCross, setIsCross] = useState(true)
  const [board, setBoard] = useState(Array(9).fill(""))
  const [xscore, setXscore] = useState(0)
  const [oscore, setOscore] = useState(0)

  const calculate = (array) => {
    const conditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    for ( let condition of conditions) {
      const [x, y, z] = condition;
      if (board[x] && board[x] === board[y] && board[x] === board[z]) {
        setWinner(board[x])
        if (board[x] === "X") {
          setXscore(xscore + 1)
        } else {
          setOscore(oscore + 1)
        }
      }
    }
  }

  const handleClick = (idx) => {
    if (board[idx].length > 0 || winner) return;
    if (isCross) {
      setBoard([...board.slice(0, idx), "X", ...board.slice(idx+1)])
    } else {
      setBoard([...board.slice(0, idx), "O", ...board.slice(idx+1)])
    }
    setIsCross(!isCross)
  }

  useEffect(() => {
    calculate(board)
  }, [board])

  const handleRestart = () => {
    setBoard(Array(9).fill(""));
    setWinner(null)
  }

  const handleClear = () => {
    handleRestart()
    setXscore(0)
    setOscore(0)
  }

  const style = {
    "X": {
      color: "#E34964"
    },
    "O": {
      color: "#5555FD"
    }
  }

  return (
    <div className="ttt-container">
      
      {winner ? 
      <h2 className="winner_msg" style={style[winner]}><GiPodiumWinner /> WINNER IS "{winner}"</h2> :
      <h2 className="winner_msg">TIC TAC TOE</h2>
      }
      <div className="ttt-body">
        {board.map((ele, idx) => {
          return <div className="cell" style={style[ele]} key={idx} onClick={() => handleClick(idx)}>{ele}</div>
        })}
      </div>
      <div className="score-container">
        <div className="score">X - {xscore}</div>
        <div className="score">O - {oscore}</div>
      </div>
      <div className="ttt-btns">
        <button className="restart" onClick={handleRestart}>RESTART</button>
        <button className="restart" onClick={handleClear}>CLEAR SCORE</button>
      </div>
        
        
    </div>
  )
};

export default TicTacToe;
