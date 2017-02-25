import React             from 'react'
import LoadingContainer  from '../containers/LoadingContainer'
import QuizContainer     from '../containers/QuizContainer'
import reset             from './reset.css'
import variables         from './variables.css';
import base              from './base.css'
import styles            from './App.css'

const App = () => (
  <div className={styles.canyouread}>
    <LoadingContainer className={styles.loading} />
    <QuizContainer />
  </div>
)
export default App
