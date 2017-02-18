import { connect } from 'react-redux'
import QuizList    from '../components/QuizList'
import { toggleHint } from '../actions'

const mapStateToProps = (state) => {
  return {
    quizzes:     state.quizzes,
    currentQuiz: state.currentQuiz,
    openHint:    state.openHint
  }
}

const mapDispatchToProps = (dispatch, openHint) => {
  return {
    onHintClick: (openHint) => {
      dispatch(toggleHint(openHint))
    }
  }
}

const VisibleQuizList = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizList)
export default VisibleQuizList
