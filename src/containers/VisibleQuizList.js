import { connect } from 'react-redux'
import QuizList    from '../components/QuizList'

const mapStateToProps = (state) => {
  return {
    quizzes:     state.quizzes,
    currentQuiz: state.currentQuiz
  }
}

const VisibleQuizList = connect(
  mapStateToProps
)(QuizList)
export default VisibleQuizList
