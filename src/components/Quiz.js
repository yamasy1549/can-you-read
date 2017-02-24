import React, { PropTypes } from 'react'
import Level                from '../components/Level'
import PlaceName            from '../components/PlaceName'
import Hint                 from '../components/Hint'
import AnswerForm           from '../components/AnswerForm'
import Answer               from '../components/Answer'
import Result               from '../components/Result'

const Quiz = ({
  quizzes, quiz, quizCount, currentQuiz, openHint, openAnswer, results,
  onHintClick, onNextClick, onAnswerClick, onResultClick
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
              onNextClick={() => onNextClick(currentQuiz, quizCount)}
            />
            <AnswerForm
              onAnswerClick={() => onAnswerClick(openAnswer, quiz.kana, currentQuiz)}
            />
            {(() => {
              if(openAnswer) {
                return (
                  <Answer
                    {...quiz}
                    quizCount={quizCount}
                    currentQuiz={currentQuiz}
                    results={results}
                    onNextClick={() => onNextClick(currentQuiz, quizCount)}
                    onResultClick={() => onResultClick(quizzes)}
                  />
                )
              }
            })()}
            {(() => {
              if(Object.keys(results).length) {
                return (
                  <Result
                    {...results}
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
  quiz:             PropTypes.object,
  quizCount:        PropTypes.number.isRequired,
  currentQuiz:      PropTypes.number.isRequired,
  openHint:         PropTypes.bool.isRequired,
  openAnswer:       PropTypes.bool.isRequired,
  results:          PropTypes.object.isRequired
}
export default Quiz
