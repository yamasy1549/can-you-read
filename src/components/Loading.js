import React             from 'react'
import LoadingContainer  from '../containers/LoadingContainer'
import QuizContainer     from '../containers/QuizContainer'
import reset             from './reset.css'
import variables         from './variables.css';
import base              from './base.css'
import styles            from './Loading.css'
import loadingImg        from '../images/loading.gif'

const Loading = ({ quizzes }) => (
  <div>
    {(() => {
      if(!quizzes.length) {
        return (
          <div className={styles.loadingWrapper}>
            <div className={styles.loading}>
              <img src={loadingImg} className={styles.loadingIcon} alt='Loading...' />
            </div>
          </div>
        )
      }
    })()}
  </div>
)
export default Loading
