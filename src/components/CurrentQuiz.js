import React, { PropTypes }           from 'react'
import { toJapanese }                 from 'jp-num'
import { gotoNextQuiz, gotoPrevQuiz } from '../actions'

const CurrentQuiz = ({ currentQuiz, quizCount, dispatch }) => (
  <nav>
    <ol>
      {[...Array(quizCount).keys()].map((i) =>
        <li key={i}>
          {toJapanese(String(i+1))}
          {(() => {
            if(i+1 <= currentQuiz) {
              return (
                <span>✓</span>
              )
            }
          })()}
        </li>
      )}
    </ol>
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
  </nav>
)

export default CurrentQuiz
