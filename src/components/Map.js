import React             from 'react'
import styles            from './Map.css'
import mapImg            from '../images/japanmap.png'

const Map = () => (
  <div>
    <img src={mapImg} className={styles.map} alt='日本地図' id='animJapanMap' />
  </div>
)
export default Map
