import React, { PropTypes } from 'react'
import Header               from '../components/Header'
import Level                from '../components/Level'
import PlaceName            from '../components/PlaceName'
import Hint                 from '../components/Hint'
import AnswerForm           from '../components/AnswerForm'
import Answer               from '../components/Answer'
import Result               from '../components/Result'

const Quiz = ({
  playing, quizzes, quiz, quizCount, currentQuiz, openHint, openAnswer, results,
  onHintClick, onPassClick, onAnswerClick, onNextClick, onResultClick, onReplayClick
}) => (
  <div>
    {(() => {
      const key = 'AIzaSyDDRFpo9sNZXwfRgmX4454_IJNubuuKFDQ'
      const size = '450x800'
      const scale = '4'
      const zoom = '8'
      const mapURL = `\/\/maps.google.com/maps/api/staticmap?key=${key}&size=${size}&scale=${scale}&zoom=${zoom}&markers=`

      if(playing) {
        return (
          <div>
            <Header />
            <main>
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
                onPassClick={() => onPassClick(openAnswer)}
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
                      mapURL={mapURL}
                    />
                  )
                }
              })()}
              {(() => {
                if(Object.keys(results).length) {
                  return (
                    <Result
                      quizCount={quizCount}
                      onReplayClick={() => onReplayClick(quizCount)}
                      {...results}
                    />
                  )
                }
              })()}
            </main>
          </div>
         )
      }
    })()}
  </div>
)

Quiz.propTypes = {
  quizzes:     PropTypes.array.isRequired,
  quiz:        PropTypes.object,
  quizCount:   PropTypes.number.isRequired,
  currentQuiz: PropTypes.number.isRequired,
  openHint:    PropTypes.bool.isRequired,
  openAnswer:  PropTypes.bool.isRequired,
  results:     PropTypes.object.isRequired
}
export default Quiz
