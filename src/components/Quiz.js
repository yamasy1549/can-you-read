import React, { PropTypes } from 'react'
import { toJapanese }       from 'jp-num'

const Quiz = ({ kanji, kana, prefecture, level, currentQuiz }) => (
  <section>
    <p>
      第{toJapanese(String(currentQuiz+1))}問
      Lv. {level}
    </p>
    <span>{kanji}({prefecture})</span>
  </section>
)

Quiz.propTypes = {
  kanji: PropTypes.string.isRequired,
  kana: PropTypes.string.isRequired,
  prefecture: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  hint: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  currentQuiz: PropTypes.number.isRequired
}

export default Quiz
