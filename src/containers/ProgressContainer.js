import { connect } from 'react-redux'
import Progress    from '../components/Progress'

const mapStateToProps = (state) => {
  return {
    currentQuiz: state.currentQuiz,
    quizCount:   state.quizCount
  }
}

const ProgressContainer = connect(
  mapStateToProps
)(Progress)
export default ProgressContainer
