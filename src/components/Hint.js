import React, { PropTypes } from 'react'
import { toJapanese }       from 'jp-num'
import styles               from './Hint.css'

const Hint = ({ hint, kana, openHint, onHintClick, onNextClick }) => (
  <div className={styles.hintWrapper}>
    <button onClick={onHintClick} className={styles.hintButton}>
      ？
    </button>
    {(() => {
      if(openHint) {
        return (
          <div className={styles.hint}>
            <p className={styles.message}>{toJapanese(String(hint))}文字目は「{kana[hint-1]}」</p>
            <button onClick={onNextClick} className={styles.passButton}>
              この問題をパス
            </button>
          </div>
        )
      }
    })()}
  </div>
)

Hint.propTypes = {
  hint:        PropTypes.number.isRequired,
  kana:        PropTypes.string.isRequired,
  openHint:    PropTypes.bool.isRequired,
  onHintClick: PropTypes.func.isRequired,
  onNextClick: PropTypes.func.isRequired
}

export default Hint
