import React, { PropTypes } from 'react'
import AnimRotateChar       from '../animations/AnimRotateChar'
import styles               from './PlaceName.css'

const PlaceName = ({ kanji, prefecture }) => (
  <div className={styles.quiz} id='animQuiz'>
    <span className={styles.prefecture}>
      <AnimRotateChar
        text={prefecture}
        duration={0.8}
        delay={1.03}
       />
    </span>
    <span className={styles.kanji}>
      <AnimRotateChar
        text={kanji}
        duration={0.8}
        delay={1.66}
       />
    </span>
  </div>
)

PlaceName.propTypes = {
  kanji:      PropTypes.string,
  prefecture: PropTypes.string
}

export default PlaceName
