import React, { PropTypes } from 'react'
import Quiz                 from './Quiz'

const QuizList = ({ quizzes, currentQuiz, openHint, onHintClick }) => (
  <main>
    {(() => {
      if(quizzes.length) {
        return (
          <Quiz
            key={quizzes[currentQuiz].id}
            openHint={openHint}
            {...quizzes[currentQuiz]}
            onClick={() => onHintClick(openHint)}
          />
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
