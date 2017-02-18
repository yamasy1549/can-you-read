import { connect }                  from 'react-redux'
import QuizList                     from '../components/QuizList'
import { toggleHint, toggleAnswer } from '../actions'

const mapStateToProps = (state) => {
  return {
    quizzes:     state.quizzes,
    currentQuiz: state.currentQuiz,
    openHint:    state.openHint,
    openAnswer:  state.openAnswer
  }
}

const mapDispatchToProps = (dispatch, openHint, openAnswer) => {
  return {
    onHintClick: (openHint) => {
      dispatch(toggleHint(openHint))
    },
    onAnswerClick: (openAnswer) => {
      dispatch(toggleAnswer(openAnswer))
    }
  }
}

const VisibleQuizList = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizList)
export default VisibleQuizList
