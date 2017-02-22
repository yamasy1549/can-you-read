import React, { PropTypes } from 'react'
import styles               from './PlaceName.css'

const PlaceName = ({ kanji, prefecture }) => (
  <div className={styles.quiz}>
    <span className={styles.prefecture}>{prefecture}</span>
    <span className={styles.kanji}>{kanji}</span>
  </div>
)

PlaceName.propTypes = {
  kanji: PropTypes.string.isRequired,
  prefecture: PropTypes.string.isRequired,
}

export default PlaceName
