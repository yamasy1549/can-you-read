import { connect }     from 'react-redux'
import Loading         from '../components/Loading'
import { startToPlay, doSomething } from '../actions'

const mapStateToProps = (state) => {
  return {
    ready:   state.ready,
    playing: state.playing
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onStartClick: (e) => {
      dispatch(doSomething(e))
    }
  }
}

const LoadingContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Loading)
export default LoadingContainer
