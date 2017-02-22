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

const mapDispatchToProps = (dispatch) => {
  return {
    onHintClick: (openHint) => {
      dispatch(toggleHint(openHint))
    },
    onNextClick: () => {
      dispatch(gotoNextQuiz())
      document.getElementById('answer').value = ''
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
