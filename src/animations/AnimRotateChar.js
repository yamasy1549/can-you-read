import React  from 'react'
import styles from './AnimRotateChar.css'

const AnimRotateChar = ({ children }) => (
  <span>
    {String(children).split('').map((c, i) =>
      <span
        key={i}
        className={styles.rotate}
        style={{animationDelay: `${0.05*i}s`}}
      >
        {c}
      </span>
    )}
  </span>
)
export default AnimRotateChar
