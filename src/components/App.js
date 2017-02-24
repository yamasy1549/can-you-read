import React             from 'react'
import Title             from '../components/Title'
import ProgressContainer from '../containers/ProgressContainer'
import QuizContainer     from '../containers/QuizContainer'
import reset             from './reset.css'
import variables         from './variables.css';
import base              from './base.css'
import styles            from './App.css'

const App = () => (
  <div className={styles.canyouread}>
    <header className={styles.header}>
      <Title />
      <ProgressContainer />
    </header>
    <QuizContainer />
  </div>
)
export default App
