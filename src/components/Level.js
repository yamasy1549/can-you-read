import React, { PropTypes } from 'react'
import { toJapanese }       from 'jp-num'
import { levelToJapanese }  from '../functions'
import AnimRotateChar       from '../animations/AnimRotateChar'
import styles               from './Level.css'

const Level = ({ level, currentQuiz }) => (
  <p className={styles.level}>
    <AnimRotateChar
      text={`第${toJapanese(String(currentQuiz))}問［${levelToJapanese(level)}］`}
      duration={0.8}
     />
  </p>
)

Level.propTypes = {
  level:       PropTypes.number.isRequired,
  currentQuiz: PropTypes.number.isRequired
}

export default Level
