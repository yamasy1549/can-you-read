import { connect } from 'react-redux'
import CurrentQuiz from '../components/CurrentQuiz'

const mapStateToProps = (state) => {
  return {
    currentQuiz: state.currentQuiz,
    quizCount:   state.quizCount
  }
}

const CurrentQuizController = connect(
  mapStateToProps
)(CurrentQuiz)
export default CurrentQuizController
