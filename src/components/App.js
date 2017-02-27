import React             from 'react'
import Map               from './Map'
import LoadingContainer  from '../containers/LoadingContainer'
import QuizContainer     from '../containers/QuizContainer'
import reset             from './reset.css'
import variables         from './variables.css';
import animation         from './animation.css';
import base              from './base.css'
import styles            from './App.css'

const App = () => (
  <div className={styles.canyouread}>
    <LoadingContainer className={styles.loading} />
    <Map />
    <div className={styles.blur} />
    <QuizContainer />
  </div>
)
export default App
