import React, { PropTypes } from 'react'
import styles               from './AnimExpand.css'

const AnimExpand = ({ duration, delay, className, children }) => (
  <div
    className={styles.appear}
    style={{animationDuration: `${duration}s`, animationDelay: `${delay}s`}}
  >
    {React.cloneElement(children, { className: `${className} ${styles.appear}` })}
  </div>
)

AnimExpand.propTypes = {
  duration: PropTypes.number,
  delay:    PropTypes.number
}
export default AnimExpand
