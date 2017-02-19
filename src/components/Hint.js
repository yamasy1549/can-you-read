import React, { PropTypes } from 'react'
import { gotoNextQuiz }     from '../actions'

const Hint = ({ hint, kana, openHint, onHintClick, onSkipClick }) => (
  <div>
    <button onClick={onHintClick}>
      Hint
    </button>
    {(() => {
      if(openHint) {
        return (
          <p>
            ヒント: {hint}文字目は「{kana[hint-1]}」
            <button onClick={onSkipClick}>
              この問題をパス
            </button>
          </p>
        )
      }
    })()}
  </div>
)

Hint.propTypes = {
  hint: PropTypes.number.isRequired,
  kana: PropTypes.string.isRequired,
  openHint: PropTypes.bool.isRequired,
  onHintClick: PropTypes.func.isRequired,
  onSkipClick: PropTypes.func.isRequired
}

export default Hint
