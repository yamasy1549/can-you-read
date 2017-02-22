import React          from 'react'
import { toJapanese } from 'jp-num'
import styles         from './Progress.css'

const progress = (currentQuiz, i) => {
  return (i+1 <= currentQuiz) ? `${styles.progress} ${styles.done}` : `${styles.progress}`
}

const Progress = ({ currentQuiz, quizCount }) => (
  <nav className={styles.nav}>
    <ol className={styles.progresses}>
      {[...Array(quizCount).keys()].map((i) =>
        <li key={i} className={progress(currentQuiz, i)}>
          {toJapanese(String(i+1))}
        </li>
      )}
    </ol>
  </nav>
)

export default Progress
