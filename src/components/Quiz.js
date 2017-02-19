import React, { PropTypes } from 'react'
import { toJapanese }       from 'jp-num'
import { levelToJapanese }  from '../functions'

const Quiz = ({ kanji, kana, prefecture, level, currentQuiz }) => (
  <section>
    <p>
      第{toJapanese(String(currentQuiz))}問
      [{levelToJapanese(level)}]
    </p>
    <span>{kanji}({prefecture})</span>
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
