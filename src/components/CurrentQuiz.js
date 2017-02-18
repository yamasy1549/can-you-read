import React, { PropTypes }           from 'react'
import { gotoNextQuiz, gotoPrevQuiz } from '../actions'

const CurrentQuiz = ({ currentQuiz, dispatch }) => (
  <div>
    <button onClick={() => {
      dispatch(gotoNextQuiz())
    }}>
      +
    </button>
    <button onClick={() => {
      dispatch(gotoPrevQuiz())
    }}>
      -
    </button>
    {currentQuiz+1}問目
  </div>
)

CurrentQuiz.propTypes = {
  currentQuiz: PropTypes.number.isRequired
}

export default CurrentQuiz
