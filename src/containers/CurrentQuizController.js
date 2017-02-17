import { connect } from 'react-redux'
import CurrentQuiz from '../components/CurrentQuiz'

const mapStateToProps = (state) => {
  return { currentQuiz: state.currentQuiz }
}

const CurrentQuizController = connect(
  mapStateToProps
)(CurrentQuiz)
export default CurrentQuizController
