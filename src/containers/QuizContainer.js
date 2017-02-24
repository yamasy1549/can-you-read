import { connect } from 'react-redux'
import Quiz        from '../components/Quiz'
import {
  toggleHint,
  toggleAnswer,
  checkAnswer,
  gotoNextQuiz
} from '../actions'

const mapStateToProps = (state) => {
  return {
    quizzes:     state.quizzes,
    quiz:        state.quizzes[state.currentQuiz-1],
    quizCount:   state.quizCount,
    currentQuiz: state.currentQuiz,
    openHint:    state.openHint,
    openAnswer:  state.openAnswer
  }
}

const mapDispatchToProps = (dispatch) => {
  // TODO: document.getElementById('answer') をまとめたい
  return {
    onHintClick: (openHint) => {
      dispatch(toggleHint(openHint))
    },
    onNextClick: () => {
      dispatch(gotoNextQuiz())
      document.getElementById('answer').value = ''

    },
    onAnswerClick: (openAnswer, answer, currentQuiz) => {
      const input = document.getElementById('answer').value
      if(input.length) {
        dispatch(toggleAnswer(openAnswer))
        dispatch(checkAnswer(input, answer, currentQuiz))
      }
    }
  }
}

const QuizContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Quiz)
export default QuizContainer
