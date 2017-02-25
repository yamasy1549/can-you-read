import { connect }    from 'react-redux'
import Loading        from '../components/Loading'
import { initialize } from '../actions'

const mapStateToProps = (state) => {
  return {
    quizzes: state.quizzes
  }
}

const LoadingContainer = connect(
  mapStateToProps
)(Loading)
export default LoadingContainer
