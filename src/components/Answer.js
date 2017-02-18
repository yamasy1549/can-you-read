import React, { PropTypes } from 'react'

const Answer = ({ description, openAnswer, onClick }) => (
  <div>
    <button onClick={onClick}>
      Answer
    </button>
    {(() => {
      if(openAnswer) {
        return (
          <p>解説: {description}</p>
        )
      }
    })()}
  </div>
)

Answer.propTypes = {
  description: PropTypes.string.isRequired,
  openAnswer: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Answer
