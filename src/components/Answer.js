import React, { PropTypes } from 'react'

const Answer = ({ kana, description, openAnswer, onClick }) => (
  <div>
    <button onClick={onClick}>
      Answer
    </button>
    {(() => {
      if(openAnswer) {
        return (
          <p>
            {kana}
            <br />
            解説: {description}
          </p>
        )
      }
    })()}
  </div>
)

Answer.propTypes = {
  kana: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  openAnswer: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Answer
