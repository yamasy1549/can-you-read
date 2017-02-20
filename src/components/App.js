import React                 from 'react'
import CurrentQuizController from '../containers/CurrentQuizController'
import VisibleQuizList       from '../containers/VisibleQuizList'
import reset                 from './reset.css'
import variables             from './variables.css';
import base                  from './base.css'
import styles                from './App.css'

const App = () => (
  <div className={styles.app}>
    <CurrentQuizController />
    <VisibleQuizList />
  </div>
)
export default App
