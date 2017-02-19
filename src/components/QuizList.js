import React, { PropTypes } from 'react'
import Quiz                 from './Quiz'
import Hint                 from './Hint'
import Answer               from './Answer'

const QuizList = ({ quizzes, currentQuiz, openHint, openAnswer, onHintClick, onAnswerClick, onSkipClick }) => (
  <main>
    {(() => {
      if(quizzes.length) {
        let quiz = quizzes[currentQuiz-1]
        return (
          <section>
            <Quiz
              key={quiz.id}
              currentQuiz={currentQuiz}
              {...quiz}
            />
            <Hint
              openHint={openHint}
              {...quiz}
              onHintClick={() => onHintClick(openHint)}
              onSkipClick={() => onSkipClick()}
            />
            <Answer
              openAnswer={openAnswer}
              {...quiz}
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
