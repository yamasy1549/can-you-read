import React, { PropTypes } from 'react'
import { connect }          from 'react-redux'
import { toJapanese }       from 'jp-num'
import styles               from './Answer.css'

const Answer = ({ prefecture, kanji, kana, description, quizCount, correctAnswer, currentQuiz, results, onNextClick, onResultClick, mapURL }) => (
  <div className={styles.answerWrapper}>
    <div className={styles.answer} id='animAnswer'>
      <span className={styles.judgment} id='animAnswer_Judgment'>
        {correctAnswer ? '正解' : '不正解'}
      </span>
      <div className={styles.placeNameWrapper} id='animAnswer_PlaceName_Wrapper'>
        <span className={styles.currentQuiz}>
          第{toJapanese(String(currentQuiz))}問
        </span>
        <div className={styles.placeName}>
          <span className={styles.kanji}>
            {kanji}
          </span>
          <span className={styles.kana}>
            {kana}
          </span>
        </div>
        <p className={styles.description}>
          {description}
        </p>
      </div>
      <img src={mapURL + prefecture + kanji} alt={kanji} className={styles.map} id='animAnswer_Img' />
      {(() => {
        if(currentQuiz == quizCount) {
          return (
            <button className={styles.nextButton} onClick={onResultClick}>
              結果
            </button>
          )
        } else {
          return (
            <button className={styles.nextButton} onClick={onNextClick} id='animAnswer_NextButton'>
              次へ
            </button>
          )
        }
      })()}
    </div>
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
