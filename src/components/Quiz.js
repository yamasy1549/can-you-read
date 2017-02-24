import React, { PropTypes } from 'react'
import Level                from '../components/Level'
import PlaceName            from '../components/PlaceName'
import Hint                 from '../components/Hint'
import AnswerForm           from '../components/AnswerForm'
import Answer               from '../components/Answer'

const Quiz = ({
  quizzes, quiz, quizCount, currentQuiz, openHint, openAnswer,
  onHintClick, onNextClick, onAnswerClick
}) => (
  <main>
    {(() => {
      if(quiz) {
        return (
          <div>
            <Level
              {...quiz}
              currentQuiz={currentQuiz}
            />
            <PlaceName
              {...quiz}
            />
            <Hint
              {...quiz}
              openHint={openHint}
              onHintClick={() => onHintClick(openHint)}
              onNextClick={() => onNextClick()}
            />
            <AnswerForm
              onAnswerClick={() => onAnswerClick(openAnswer, quiz.kana, currentQuiz)}
            />
            {(() => {
              if(openAnswer) {
                return (
                  <Answer
                    {...quiz}
                    onNextClick={() => onNextClick()}
                  />
                )
              }
            })()}
          </div>
        )
      }
    })()}
  </main>
)

Quiz.propTypes = {
  quizzes:          PropTypes.array.isRequired,
  quizCount:        PropTypes.number.isRequired,
  currentQuiz:      PropTypes.number.isRequired,
  openHint:         PropTypes.bool.isRequired,
  openAnswer:       PropTypes.bool.isRequired
}
export default Quiz
