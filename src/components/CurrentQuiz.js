import React, { PropTypes }           from 'react'
import { gotoNextQuiz, gotoPrevQuiz } from '../actions'

const CurrentQuiz = ({ dispatch }) => (
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
  </div>
)

export default CurrentQuiz
