import React, {useState} from'react'
import Board from './board';
import { calculatewinner } from '../helpers';

const style ={
    width: '200px',
    margin: '20px auto',
}


const Game = () => {
const [history, setHistory]= useState([Array(9).fill(null)]);
const [stepNumber, setStepNumber] = useState(0);
const [xIsNext, setXisNext]= useState(true);
const winner = calculatewinner(history[stepNumber]);



const handleClick= i =>{
const timeInHistory = history.slice(0,stepNumber + 1);
const current = timeInHistory[stepNumber];
const squares = [...current];
// if user click an occupied square or if game is won, return
 if(winner || squares[i]) return ;
// put an x or or an 0 in the clicked square
squares[i]= xIsNext ? 'x' : 'o';
setHistory([...timeInHistory,squares]);
setStepNumber(timeInHistory.length)
setXisNext(!xIsNext);
}
const jumpTo = step =>{
  setStepNumber(step)
  setXisNext(step% 2 === 0)

}

const renderMoves = () => (
    history.map((_step, move)=> {
        const destination = move ?`Go to move#${move}` : 'Go to start';
        return(
            <li key ={move}>
                 <button onClick={() => jumpTo(move)}>{destination}</button>
             </li>
            
           
        )
    })
 
)

return (
    <>
      <Board  squares={history[stepNumber]} onClick={handleClick} />
    <div style={style}>
        <p>{winner ? 'winner: ' + winner: 'Next player: ' + (xIsNext ? 'x' : 'o')}</p>
    {renderMoves()}
    </div>
    </>
)

};
export default Game;