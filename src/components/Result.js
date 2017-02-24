import React, { PropTypes } from 'react'
import { toJapanese }       from 'jp-num'
import styles               from './Result.css'

const Result = ({ pass, correct, incorrect }) => (
  <div>
    <ul>
      <li>正解 {toJapanese(String(correct))}問</li>
      <li>不正解 {toJapanese(String(incorrect))}問</li>
      <li>パス {toJapanese(String(pass))}問</li>
    </ul>
  </div>
)

Result.propTypes = {
  pass: PropTypes.number.isRequired,
  correct: PropTypes.number.isRequired,
  incorrect: PropTypes.number.isRequired
}

export default Result