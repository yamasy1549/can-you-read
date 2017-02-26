import React            from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import LoadingContainer from '../containers/LoadingContainer'
import QuizContainer    from '../containers/QuizContainer'
import AnimRotateChar   from '../animations/AnimRotateChar'
import AnimAppear       from '../animations/AnimAppear'
import reset            from './reset.css'
import variables        from './variables.css';
import base             from './base.css'
import styles           from './Loading.css'
import loadingImg       from '../images/loading.gif'

const Loading = ({ ready, playing, onStartClick }) => (
  <div>
    {(() => {
      if(!ready) {
        return (
          <div className={styles.loadingWrapper}>
            <div className={styles.loading}>
              <img src={loadingImg} className={styles.loadingIcon} id='animLoading_Img' alt='Loading...' />
            </div>
          </div>
        )
      } else if(ready && !playing) {
        return (
          <div className={styles.loadingWrapper}>
            <h1 className={styles.title}>
              <AnimRotateChar>難読地名くいず</AnimRotateChar>
            </h1>
            <button onClick={onStartClick} className={styles.startButton} id='animStart_Button'>
              <span className={styles.buttonText} id='animStart_ButtonText'>始める</span>
            </button>
          </div>
        )
      }
    })()}
  </div>
)
export default Loading
