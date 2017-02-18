import React, { PropTypes } from 'react'
import Quiz                 from './Quiz'
import Hint                 from './Hint'
import Answer               from './Answer'

const QuizList = ({ quizzes, currentQuiz, openHint, openAnswer, onHintClick, onAnswerClick }) => (
  <main>
    {(() => {
      if(quizzes.length) {
        return (
          <section>
            <Quiz
              key={quizzes[currentQuiz].id}
              currentQuiz={currentQuiz}
              {...quizzes[currentQuiz]}
            />
            <Hint
              openHint={openHint}
              {...quizzes[currentQuiz]}
              onClick={() => onHintClick(openHint)}
            />
            <Answer
              openAnswer={openAnswer}
              {...quizzes[currentQuiz]}
              onClick={() => onAnswerClick(openAnswer)}
            />
          </section>
        )
      }
    })()}
  </main>
)

QuizList.propTypes = {
  quizzes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired
  }).isRequired).isRequired,
  currentQuiz: PropTypes.number.isRequired,
  openHint: PropTypes.bool.isRequired
}

export default QuizList
