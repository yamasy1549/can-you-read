import { connect } from 'react-redux'
import Quiz        from '../components/Quiz'
import {
  toggleHint,
  toggleAnswer,
  checkAnswer,
  animGotoNextQuiz,
  tallyAnswers,
  initialize,
  animClearAllQuiz,
  startTotterMap,
  stopTotterMap
} from '../actions'

const mapStateToProps = (state) => {
  return {
    playing:     state.playing,
    quizzes:     state.quizzes,
    quiz:        state.quizzes[state.currentQuiz-1],
    quizCount:   state.quizCount,
    currentQuiz: state.currentQuiz,
    openHint:    state.openHint,
    openAnswer:  state.openAnswer,
    results:     state.results
  }
}

const mapDispatchToProps = (dispatch) => {
  // TODO: document.getElementById('answer') をまとめたい
  return {
    onHintClick: (openHint) => {
      dispatch(toggleHint(openHint))
    },
    onPassClick: (openAnswer) => {
      dispatch(toggleAnswer(openAnswer))
      dispatch(toggleHint(true))
    },
    onAnswerClick: (openAnswer, answer, currentQuiz) => {
      const input = document.getElementById('answer').value
      if(input.length) {
        dispatch(toggleAnswer(openAnswer))
        dispatch(checkAnswer(input, answer, currentQuiz))
        dispatch(toggleHint(true))
      }
    },
    onNextClick: (currentQuiz, quizCount) => {
      dispatch(animGotoNextQuiz(currentQuiz, quizCount))
      document.getElementById('answer').value = ''
    },
    onResultClick: (quizzes) => {
      dispatch(tallyAnswers(quizzes))
      dispatch(animClearAllQuiz())
      dispatch(toggleAnswer(true))
      dispatch(startTotterMap())
    },
    onReplayClick: (quizCount) => {
      dispatch(initialize(quizCount))
      dispatch(stopTotterMap())
    }
  }
}

const QuizContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Quiz)
export default QuizContainer
