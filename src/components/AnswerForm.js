import React, { PropTypes } from 'react'
import { connect }          from 'react-redux'
import styles               from './AnswerForm.css'

const AnswerForm = ({ onAnswerClick }) => (
 <div className={styles.answerFormWrapper} id='animAnswerForm_Wrapper'>
   <input
     id='answer'
     className={styles.input}
     autoFocus={true}
     placeholder='ここに読み仮名を入力'
   />
   <hr className={styles.answerLine} />
   <button className={styles.answerButton} onClick={onAnswerClick}>
     決定
   </button>
 </div>
)

AnswerForm.propTypes = {
  onAnswerClick: PropTypes.func.isRequired
}
export default AnswerForm
