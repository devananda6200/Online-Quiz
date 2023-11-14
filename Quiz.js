import React, { useState } from 'react';
import './Quiz.css';

const Quiz = () => {
  const questions = [
    {
      question: 'Who invented the radio',
      options: ['Marconi', 'Newton', 'Maxwell', 'Einstein'],
      answer: 'Marconi',
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Mars', 'Jupiter', 'Mercury', 'Venus'],
      answer: 'Mars',
    },
    {
      question: 'In which decade was the American Institute of Electrical Engineers (AIEE) founded?',
      options: ['1850s', '1880s','1930s','1950s'],
      answer: '1880s',
    },
    {
      question: 'What is part of a database that holds only one type of information?',
      options: ['Report','field','record','file'],
      answer: 'field',
    },
    {
      question: 'OS computer abbreviation usually means?',
      options: ['Order of significance','Open software','Operating system','Optical sensor'],
      answer: 'Operating system',
    },
    {
      question: 'Most modern TVs draw power even if turned off. The circuit the power is used in does what function?',
      options: ['Sound','Remote control','Color balance','High voltage'],
      answer: 'Remote control',
    },
    {
      question: 'Who is largely responsible for breaking the German Enigma codes, created a test that provided a foundation for artificial intelligence?',
      options: ['Alan Turing','Jeff Bezos','George Boole','Charles Babbage'],
      answer: 'Alan Turing',
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const handleAnswerClick = (selectedOption) => {
    setUserAnswer(selectedOption);

    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setUserAnswer(null);
      } else {
        alert(`Quiz completed! Your score is ${score}/${questions.length}`);
      }
    }, 1000);
  };

  return (
    <div className="quiz">
      <h1>Quiz Time!</h1>
      {currentQuestion < questions.length ? (
        <div>
          <h2>Question {currentQuestion + 1}</h2>
          <p>{questions[currentQuestion].question}</p>
          <ul>
            {questions[currentQuestion].options.map((option, index) => (
              <li key={index} onClick={() => handleAnswerClick(option)}>
                {option}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <p>Quiz completed! Your score is {score}/{questions.length}</p>
        </div>
      )}
    </div>
  );
};

export default Quiz;
