import { connect } from 'react-redux'
import Quiz        from '../components/Quiz'
import {
  toggleHint,
  toggleAnswer,
  gotoNextQuiz
} from '../actions'

const mapStateToProps = (state) => {
  return {
    quizzes:     state.quizzes,
    quizCount:   state.quizCount,
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
    onNextClick: () => {
      dispatch(gotoNextQuiz())
    },
    onAnswerClick: (openAnswer) => {
      dispatch(toggleAnswer(openAnswer))
    }
  }
}

const QuizContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Quiz)
export default QuizContainer
