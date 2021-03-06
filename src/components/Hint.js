import React, { PropTypes } from 'react'
import { toJapanese }       from 'jp-num'
import styles               from './Hint.css'

const Hint = ({ hint, kana, openHint, onHintClick, onPassClick }) => (
  <div id='animHint_Wrapper'>
    <button onClick={onHintClick} className={styles.hintButton}>
      ？
    </button>
    {(() => {
      if(openHint) {
        return (
          <div className={styles.hint} id='animHint'>
            <p className={styles.message}>{toJapanese(String(hint))}文字目は「{kana[hint-1]}」</p>
            <button onClick={onPassClick} className={styles.passButton}>
              この問題をパス
            </button>
          </div>
        )
      }
    })()}
  </div>
)

Hint.propTypes = {
  hint:        PropTypes.number,
  kana:        PropTypes.string,
  openHint:    PropTypes.bool.isRequired,
  onHintClick: PropTypes.func.isRequired,
  onPassClick: PropTypes.func.isRequired
}

export default Hint
