import React, { PropTypes } from 'react'
import { connect }          from 'react-redux'
import styles               from './Answer.css'

const key = 'AIzaSyDDRFpo9sNZXwfRgmX4454_IJNubuuKFDQ'
const size = '450x800'
const scale = '2'
const zoom = '8'
const mapURL = `\/\/maps.google.com/maps/api/staticmap?key=${key}&size=${size}&scale=${scale}&zoom=${zoom}&markers=`
console.log(mapURL)

const Answer = ({ prefecture, kanji, kana, description, quizCount, correctAnswer, currentQuiz, results, onNextClick, onResultClick }) => (
  <div className={styles.answerWrapper}>
    <p>
      {correctAnswer ? '正解' : '不正解'}！
      {kana}
      <br />
      解説: {description}
      <img src={mapURL + prefecture + kanji} alt={kanji} className={styles.map} />
      {(() => {
        if(currentQuiz == quizCount) {
          return (
            <button onClick={onResultClick}>
              結果
            </button>
          )
        } else {
          return (
            <button onClick={onNextClick}>
              次へ
            </button>
          )
        }
      })()}
    </p>
  </div>
)

Answer.propTypes = {
  prefecture:  PropTypes.string.isRequired,
  kanji:       PropTypes.string.isRequired,
  kana:        PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onNextClick: PropTypes.func.isRequired
}
export default Answer
