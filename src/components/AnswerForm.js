import React, { PropTypes } from 'react'
import { connect }          from 'react-redux'
import styles               from './AnswerForm.css'

const AnswerForm = ({ onAnswerClick }) => (
 <div className={styles.answerFormWrapper}>
   <input className={styles.input} id='answer' autoFocus={true} />
   <button className={styles.answerButton} onClick={onAnswerClick}>
     決定
   </button>
 </div>
)

AnswerForm.propTypes = {
  onAnswerClick: PropTypes.func.isRequired
}
export default AnswerForm
