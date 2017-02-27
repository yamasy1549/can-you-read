import React, { PropTypes } from 'react'
import LoadingContainer     from '../containers/LoadingContainer'
import QuizContainer        from '../containers/QuizContainer'
import AnimRotateChar       from '../animations/AnimRotateChar'
import reset                from './reset.css'
import variables            from './variables.css';
import base                 from './base.css'
import styles               from './Loading.css'
import loadingImg           from '../images/loading.gif'

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
              <AnimRotateChar
                text={'難読地名くいず'}
                animation={'big'}
                duration={3}
              />
            </h1>
            <button onClick={onStartClick} className={styles.startButton} id='animStart_Button'>
              <div className={styles.buttonWave} id='animStart_ButtonWave' />
              <span className={styles.buttonText} id='animStart_ButtonText'>始める</span>
            </button>
          </div>
        )
      }
    })()}
  </div>
)

Loading.propTypes = {
  ready:        PropTypes.bool.isRequired,
  playing:      PropTypes.bool.isRequired,
  onStartClick: PropTypes.func.isRequired
}
export default Loading
