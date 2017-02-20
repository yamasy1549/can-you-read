import React, { PropTypes }           from 'react'
import { toJapanese }                 from 'jp-num'
import { gotoNextQuiz, gotoPrevQuiz } from '../actions'
import styles                         from './CurrentQuiz.css'

const progress = (currentQuiz, i) => {
  return (i+1 <= currentQuiz) ? `${styles.progress} ${styles.done}` : `${styles.progress}`
}

const CurrentQuiz = ({ currentQuiz, quizCount, dispatch }) => (
  <header>
    <h1 className={styles.title}>難読地名くいず</h1>
    <nav className={styles.nav}>
      <ol className={styles.progresses}>
        {[...Array(quizCount).keys()].map((i) =>
          <li key={i} className={progress(currentQuiz, i)}>
            {toJapanese(String(i+1))}
          </li>
        )}
      </ol>
      <div className={styles.div}>
        <button onClick={() => {
          dispatch(gotoNextQuiz())
        }}>
          +
        </button>
        <button onClick={() => {
          dispatch(gotoPrevQuiz())
        }}>
          -
        </button>
      </div>
    </nav>
  </header>
)

export default CurrentQuiz
