import React, { PropTypes } from 'react'

const Quiz = ({ kanji, kana, prefecture, level, hint, description, openHint, onClick }) => (
  <div>
    <ruby>
      {kanji}
      <rt>{kana}</rt>
    </ruby>
    ({prefecture})
    <br />
    Lv. {level} / {description}
    <button onClick={onClick}>
      Hint
    </button>
    {(() => {
      if(openHint) {
        return (
          <p>{hint}文字目は「{kana[hint-1]}」</p>
        )
      }
    })()}
  </div>
)

Quiz.propTypes = {
  kanji: PropTypes.string.isRequired,
  kana: PropTypes.string.isRequired,
  prefecture: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  hint: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired
}

export default Quiz
