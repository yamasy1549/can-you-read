import React, { PropTypes } from 'react'
import { toJapanese }       from 'jp-num'
import { levelToJapanese }  from '../functions'
import Answer               from './Answer'
import styles               from './Quiz.css'

const Quiz = ({ kanji, kana, description, prefecture, level, currentQuiz, openAnswer, onAnswerClick }) => (
  <section>
    <p className={styles.quizInfo}>
      第{toJapanese(String(currentQuiz))}問
      ［{levelToJapanese(level)}］
    </p>
    <Answer
      openAnswer={openAnswer}
      kana={kana}
      description={description}
      onClick={() => onAnswerClick(openAnswer)}
    />
    <section className={styles.quiz}>
      <span className={styles.prefecture}>{prefecture}</span>
      <span className={styles.kanji}>{kanji}</span>
    </section>
  </section>
)

Quiz.propTypes = {
  kanji: PropTypes.string.isRequired,
  kana: PropTypes.string.isRequired,
  prefecture: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  currentQuiz: PropTypes.number.isRequired
}

export default Quiz
