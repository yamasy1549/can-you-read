import React, { PropTypes } from 'react'

const Hint = ({ hint, kana, openHint, onClick }) => (
  <div>
    <button onClick={onClick}>
      Hint
    </button>
    {(() => {
      if(openHint) {
        return (
          <p>ヒント: {hint}文字目は「{kana[hint-1]}」</p>
        )
      }
    })()}
  </div>
)

Hint.propTypes = {
  hint: PropTypes.number.isRequired,
  kana: PropTypes.string.isRequired,
  openHint: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Hint
