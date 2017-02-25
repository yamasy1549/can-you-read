import React             from 'react'
import LoadingContainer  from '../containers/LoadingContainer'
import QuizContainer     from '../containers/QuizContainer'
import reset             from './reset.css'
import variables         from './variables.css';
import base              from './base.css'
import styles            from './Loading.css'
import loadingImg        from '../images/loading.gif'

const Loading = ({ ready, playing, onStartClick }) => (
  <div>
    {(() => {
      if(!ready) {
        return (
          <div className={styles.loadingWrapper}>
            <div className={styles.loading}>
              <img src={loadingImg} className={styles.loadingIcon} alt='Loading...' />
            </div>
          </div>
        )
      } else if(ready && !playing) {
        return (
          <div className={styles.loadingWrapper}>
            <h1 className={styles.title}>難読地名くいず</h1>
            <button onClick={onStartClick} className={styles.startButton}>始める</button>
          </div>
        )
      }
    })()}
  </div>
)
export default Loading
