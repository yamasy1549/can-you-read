import React, { PropTypes } from 'react'
import { connect }          from 'react-redux'
import styles               from './Answer.css'

const Answer = ({ kana, description, correct, onNextClick }) => (
  <div className={styles.answerWrapper}>
    <p>
      {correct ? '正解' : '不正解'}！
      {kana}
      <br />
      解説: {description}
      <button onClick={onNextClick}>
        次へ
      </button>
    </p>
  </div>
)

Answer.propTypes = {
  kana:        PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onNextClick: PropTypes.func.isRequired
}
export default Answer
