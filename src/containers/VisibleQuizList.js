import { connect } from 'react-redux'
import QuizList    from '../components/QuizList'

const mapStateToProps = (state) => {
  return { quizzes: state.quizzes }
}

const VisibleQuizList = connect(
  mapStateToProps
)(QuizList)
export default VisibleQuizList
