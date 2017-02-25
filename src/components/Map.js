import React             from 'react'
import styles            from './Map.css'
import mapImg            from '../images/japanmap.png'

const Map = () => (
  <img src={mapImg} className={styles.map} alt='日本地図' />
)
export default Map
