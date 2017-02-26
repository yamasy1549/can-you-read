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
              <img src={loadingImg} className={styles.loadingIcon} alt='Loading...' />
            </div>
          </div>
        )
      } else if(ready && !playing) {
        return (
          <div className={styles.loadingWrapper}>
            <h1 className={styles.title}>
              <AnimRotateChar>難読地名くいず</AnimRotateChar>
            </h1>
              <AnimAppear duration={1.73} delay={0.63}>
                <button onClick={(e) => onStartClick(e)} className={styles.startButton}>
                  <AnimAppear duration={0.60} delay={1.76}>
                  始める
                  </AnimAppear>
                </button>
              </AnimAppear>
          </div>
        )
      }
    })()}
  </div>
)
export default Loading
