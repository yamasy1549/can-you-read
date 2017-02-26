import React, { PropTypes } from 'react'
import styles               from './AnimAppear.css'

const AnimAppear = ({ duration, delay, children }) => (
  <span
    className={styles.appear}
    style={{animationDuration: `${duration}s`, animationDelay: `${delay}s`}}
  >
    {children}
  </span>
)

AnimAppear.propTypes = {
  duration: PropTypes.number,
  delay:    PropTypes.number
}
export default AnimAppear
