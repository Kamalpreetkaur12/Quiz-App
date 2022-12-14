import React, { useState } from 'react';
import './App.css';
import data from './components/data';

function App() {

  const [finalResult, setFinalResult] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const optionClicked = (isCorrect) => {
    if(isCorrect){
      setScore(score + 1);
    } if (currentQuestion +1 < data.length){
      setCurrentQuestion(currentQuestion + 1);
    }else {
      setFinalResult(true);
    }
  }

  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setFinalResult(false);
  }


  return (
    <div className="App">
     <h1>Quiz Game</h1>
     <h2>Current Score: {score} </h2>
     
     {finalResult? ( <div className='result'>
      <h2>Final Result</h2>
      <h3>{score} out of {data.length} correct - ({(score/data.length)*100}%) </h3>
      <button onClick={()=> restartGame()}>Restart game</button>
     </div>) : ( <div className='questions'>
      <h2>Question {currentQuestion + 1} out of {data.length}</h2>
      <h3 className='text'>{data[currentQuestion].text}</h3>

      <ul>
        {data[currentQuestion].options.map((ele)=>{
          return(
            <li onClick={()=> optionClicked(ele.isCorrect)} key={ele.id}>{ele.text}</li>
          )
        })}
      </ul>
     </div>)}
    

    
    </div>
  );
}

export default App;
