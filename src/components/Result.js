import React, { PropTypes }  from 'react'
import { toJapanese }        from 'jp-num'
import { resultsToJapanese } from '../functions'
import AnimRotateChar        from '../animations/AnimRotateChar'
import twitterIcon           from '../images/twitter.png'
import replayIcon            from '../images/replay.png'
import styles                from './Result.css'

const Result = ({ quizCount, pass, correct, incorrect, onReplayClick }) => (
  <div className={styles.resultWrapper}>
    <h2 className={styles.resultTitle}>結果</h2>
    <ul className={styles.resultList}>
      <li className={styles.result}>
        <AnimRotateChar
          text={`正解　　${toJapanese(String(correct))}問`}
          delay={2.46}
          duration={0.8}
         />
      </li>
      <li className={styles.result}>
        <AnimRotateChar
          text={`不正解　${toJapanese(String(incorrect))}問`}
          delay={2.62}
          duration={0.8}
         />
      </li>
      <li className={styles.result}>

        <AnimRotateChar
          text={`パス　　${toJapanese(String(pass))}問`}
          delay={2.78}
          duration={0.8}
         />
      </li>
    </ul>
    <div className={styles.evaluation}>
      <span className={styles.text}>評価</span>
      <div className={styles.message}>{resultsToJapanese(correct, quizCount)}</div>
    </div>
    <div className={styles.share}>
      <button className={styles.button}>
        <a className={styles.buttonTextTwitter} href={`\/\/twitter.com/intent/tweet?text=http:\/\/yamasy.info\/can-you-read\ 難読地名くいずで${quizCount}問中${correct}問正解しました（評価：${resultsToJapanese(correct, quizCount)}）`}>
          <img className={styles.icon} src={twitterIcon} />
          Twitterで共有
        </a>
      </button>
      <button className={styles.button} onClick={onReplayClick}>
        <span className={styles.buttonText}>
          <img className={styles.icon} src={replayIcon} />
          最初からあそぶ
        </span>
      </button>
    </div>
  </div>
)

Result.propTypes = {
  quizCount:     PropTypes.number.isRequired,
  pass:          PropTypes.number.isRequired,
  correct:       PropTypes.number.isRequired,
  incorrect:     PropTypes.number.isRequired,
  onReplayClick: PropTypes.func.isRequired
}
export default Result
