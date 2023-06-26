import React, { useState } from 'react';
import { Ship } from "../assets";
import questions from "./Question";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Trivia = ({user, setUser , userData}) => {
    const [currentQuestion, setCurrentQuestion] = useState(() => {
        const randomQuestionIndex = Math.floor(Math.random() * questions.length);
        return questions[randomQuestionIndex];
    });

    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [wrongAnswers, setWrongAnswers] = useState(0);
    const [answeredQuestions, setAnsweredQuestions] = useState(0);
    const navigate = useNavigate()

    const getRandomizedAnswerOptions = () => {
        const answerOptions = currentQuestion.answerOptions;
        const randomizedOptions = [...answerOptions].sort(() => Math.random() - 0.5);
        return randomizedOptions;
    };

    const answerButtonClick = (selectedAnswer) => {
        if (selectedAnswer.isCorrect) {
            setScore(score + 20);
        } else {
            setWrongAnswers(wrongAnswers + 1);
        }

        setAnsweredQuestions(answeredQuestions + 1);

        if (answeredQuestions + 1 < questions.length && wrongAnswers < 5) {
            const remainingQuestions = questions.filter(
                (question, index) => index !== answeredQuestions
            );
            const randomQuestionIndex = Math.floor(Math.random() * remainingQuestions.length);
            const randomQuestion = remainingQuestions[randomQuestionIndex];
            setCurrentQuestion(randomQuestion);
        } else {
            setShowScore(true);
        }
    };

    const updateScore = () => {
        console.log(userData._id)
        userData.score < score?
        axios.patch(`http://localhost:8000/api/users/${userData._id}`, {score})
        .then(res => {
            console.log("HERE: ", res.data)
            setUser(res.data.user)
            navigate('/game')
        })
        .catch(err => console.log(err)):
        navigate('/game')
    }
    

    return (
<div className='h-screen bg-bgStars bg-cover flex flex-col sm:p-20 sm:flex-row md:flex-row ss:flex-row sm:h-screen lg:flex-row items-center justify-around overflow-hidden-auto'>
  <img src={Ship} className='ml-10 sm:mt-20 mb-5 lg:w-[550px] lg:h-[300px] md:w-[200px] md:h-[50px]  md:mt-0 md:mb-0 md:mr-20 md:order-first' />
  <div className='mb-20  flex flex-col justify-center'>
    {showScore ? (
      wrongAnswers < 5 ? (
        <div className='text-white text-[35px]'>Your Score: {score}</div>
      ) : (
        <div className='text-yellow-300 font-SchoolBell text-[35px]'>
            <h3>Game Over! Final Score: {score}</h3>
            <button onClick={updateScore}>Go Home</button>
        </div>
      )
    ) : (
      <div className='mb-10'>
        <p className='text-yellow-300 flex justify-center font-SchoolBell text-[30px] '>Score: {score}</p>
        <div className='text-[#66FCF1] m-5 text-center text-[20px] font-SchoolBell font-bold border-[#76f925] p-4 border-solid border-[3px] shadow-md shadow-[#76f925] bg-black rounded-3xl'>
          {currentQuestion.questionText}
        </div>
        <div className='flex flex-col items-center'>
          {getRandomizedAnswerOptions().map((answerOption, index) => (
            <button
              className='text-yellow-300 mt-4 hover:text-black hover:bg-[#76f925] justify-center flex w-[400px] text-[18px] text-bold font-SchoolBell border-[#76f925] p-4 border-solid border-[3px] shadow-sm shadow-yellow-300 bg-black rounded-3xl'
              key={index}
              onClick={() => answerButtonClick(answerOption)}
            >
              {answerOption.answerText}
            </button>
          ))}
        </div>
      </div>
    )}
  </div>
</div>



    );
};

export default Trivia;
