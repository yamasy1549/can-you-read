import React  from 'react'
import styles from './AnimRotateChar.css'

const AnimRotateChar = ({ text, animation, delay = 0, duration }) => (
  <span>
    {String(text).split('').map((c, i) =>
      <span
        key={i}
        className={ (animation == 'big') ? styles.rotateBig : styles.rotate }
        style={{animationDuration: `${duration}s`, animationDelay: `${delay+0.05*i}s`}}
      >
        {c}
      </span>
    )}
  </span>
)
export default AnimRotateChar
