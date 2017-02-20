import React, { PropTypes } from 'react'
import { gotoNextQuiz }     from '../actions'
import { toJapanese }       from 'jp-num'
import styles               from './Hint.css'

const Hint = ({ hint, kana, openHint, onHintClick, onSkipClick }) => (
  <div className={styles.hintWrapper}>
    <button onClick={onHintClick} className={styles.hintButton}>
      ？
    </button>
    {(() => {
      if(openHint) {
        return (
          <div className={styles.hint}>
            {toJapanese(String(hint))}文字目は「{kana[hint-1]}」
            <button onClick={onSkipClick} className={styles.passButton}>
              この問題をパス
            </button>
          </div>
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
