import React, { PropTypes } from 'react'
import Quiz                 from './Quiz'

const QuizList = ({ quizzes }) => (
  <ul>
    {quizzes.map((quiz) =>
      <Quiz
        key={quiz.id}
        {...quiz}
      />
    )}
  </ul>
)

QuizList.propTypes = {
  quizzes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired
  }).isRequired).isRequired
}

export default QuizList
