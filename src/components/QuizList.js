import React, { PropTypes } from 'react'
import Quiz                 from './Quiz'

const QuizList = ({ quizzes, currentQuiz }) => (
  <main>
    {(() => {
      if(quizzes.length) {
        return (
          <Quiz
            key={quizzes[currentQuiz].id}
            {...quizzes[currentQuiz]}
          />
        )
      }
    })()}
  </main>
)

QuizList.propTypes = {
  quizzes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired
  }).isRequired).isRequired
}

export default QuizList
