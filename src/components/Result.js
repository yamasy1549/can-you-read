import React, { PropTypes }  from 'react'
import { toJapanese }        from 'jp-num'
import { resultsToJapanese } from '../functions'
import styles                from './Result.css'

const Result = ({ quizCount, pass, correct, incorrect, onReplayClick }) => (
  <div>
    <ul>
      <li>正解 {toJapanese(String(correct))}問</li>
      <li>不正解 {toJapanese(String(incorrect))}問</li>
      <li>パス {toJapanese(String(pass))}問</li>
    </ul>
    <div>評価: {resultsToJapanese(correct, quizCount)}</div>
    <div>
      <button>
        <a href={`\/\/twitter.com/intent/tweet?text=難読地名くいずで${quizCount}問中${correct}問正解しました`}>Twitterで共有</a>
      </button>
      <button onClick={onReplayClick}>
        最初からあそぶ
      </button>
    </div>
  </div>
)

Result.propTypes = {
  quizCount: PropTypes.number.isRequired,
  pass:      PropTypes.number.isRequired,
  correct:   PropTypes.number.isRequired,
  incorrect: PropTypes.number.isRequired
}

export default Result
