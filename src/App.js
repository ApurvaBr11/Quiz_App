import { useState } from 'react';
import data from './data'
import './App.css'
function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0);
  const [hint, setHint] = useState("");

  const handleAnswerOptionClick = (isCorrect) => {

    if(isCorrect){
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if(nextQuestion < data.length){
      setCurrentQuestion(nextQuestion);
      setHint("")
    }
    else{
      setShowScore(true);
    }

  }

  const handleTryAgain = () => {
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
  }
  const handlehint = () => {
    let me = data[currentQuestion].hint;
    if(hint==""){
      setHint(me)
    }else{
      setHint("")
    }
    // let t = setTimeout(() => {
    //   setHint("")
    // }, 1000);
  }
  return (
  <div className="app h-screen flex justify-center items-center main">
  {
    showScore ?
      <div className="score-section cont w-96 text-center h-44 p-12">
        <h1 className='m-2 text-2xl font-semibold'> You scored {score} out of {data.length}</h1>
        <button className='btn mt-4 w-32 h-12 rounded mr-2 animate:bounce font-bold btn-tryagain hover:bg-slate-100 hover:text-black' type='button' onClick={handleTryAgain} >Start Again</button>
      </div>
      :
      <div className="cont">
        <div className='flex'>
        <div className="question-section w-96 flex flex-col justify-between p-6 rounded">
          <div className="question-text m-2 text-2xl font-semibold"> {data[currentQuestion].questionText}</div>
          <div className='question-count font-semibold text-sm flex flex-col gap-3'>
             <button type='button' className='text-left text-xs font-bold italic' onClick={handlehint}>Hint<p className='font-serif font-normal'>{hint}</p> </button>
             <div><span>Qustion {currentQuestion + 1} </span> / {data.length}</div>
          </div>
        </div>

        <div className="answer-section flex flex-col pt-9">
          {
            data[currentQuestion].answersOption.map((ansOption, index) => (
              <button className=' mb-4 w-32 h-8 rounded mr-2  hover:text-black font-bold btn' key={index} type='button' onClick={() => handleAnswerOptionClick(ansOption.isCorrect)}>{ansOption.answerText}</button>
            ))
          }
        </div>
      </div>
      </div>
  }


</div>
 );
}
export default App;


