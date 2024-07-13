
import './App.css';
import { useState ,useEffect} from 'react';
import Square from './Components/Square';
import { Patterns } from './Patterns';
function App() {
  const [board,setboard ] =useState(["","","","","","","","",""]);
  const [player,setPlayer]=useState("O");
  const [result ,setresult] = useState({winner:"none",state:"none"});
  useEffect(()=>{
checkWin();
cheackIfTie();
if(player == "X"){
  setPlayer("O")
}
else(
  setPlayer("X")
)
  },[board]);
  useEffect(()=>{
    if(result.state !="none"){
      alert(`Game finished! Winning Player : ${result.winner}`)
      restartGame()
    }

 },[result] )
const chosseSquare =(square)=>{
setboard(board.map((val,idx) => {
  if(idx == square && val ==""){
    return player

  }
  return val;

})
);

};
const checkWin = () =>{

  Patterns.forEach((currentPattern)=>{
    const firstPlayer = board[currentPattern[0]];
    if(firstPlayer =="") return;
    let foundWinningPattern = true
    currentPattern.forEach((idx) =>{
    if(board[idx] != firstPlayer){
      foundWinningPattern = false
    }

    });
    if(foundWinningPattern){
    setresult({winner : player, state:"Won"})
    }
  });
};

   const cheackIfTie = () =>{
    let filled = true;
    board.forEach((square)=>{
      if(square==""){
      filled=false
    }
    });
    if(filled){
      setresult({winner:"No one",state:"Tie"});
    }
   };
   const restartGame = () =>{
    setboard(["","","","","","","","",""])
    setPlayer("X")
   }
   

  return (
   <div className='App'>
    <div className='board'>
     <div className='row'>
      <Square val={board[0]} chosseSquare={() =>{chosseSquare(0)}}/>
      <Square val={board[1]} chosseSquare={() =>{chosseSquare(1)}}/>
      <Square val={board[2]} chosseSquare={() =>{chosseSquare(2)}}/>
      </div> 
     <div className='row'>
     <Square val={board[3]} chosseSquare={() =>{chosseSquare(3)}}/>
      <Square val={board[4]} chosseSquare={() =>{chosseSquare(4)}}/>
      <Square val={board[5]} chosseSquare={() =>{chosseSquare(5)}}/>
      </div> 
     <div className='row'>
     <Square val={board[6]} chosseSquare={() =>{chosseSquare(6)}}/>
      <Square val={board[7]} chosseSquare={() =>{chosseSquare(7)}}/>
      <Square val={board[8]} chosseSquare={() =>{chosseSquare(8)}}/>
      </div> 

    </div>

   </div>
  );
}

export default App;
