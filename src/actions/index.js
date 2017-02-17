import axios from 'axios'

export const startFetchQuizzes = () => {
  return {
    type: 'FETCH_QUIZZES_START'
  }
}

export const successFetchQuizzes = (quizzes) => {
  return {
    type: 'FETCH_QUIZZES_SUCCESS',
    quizzes
  }
}

export const failureFetchQuizzes = (error) => {
  return {
    type: 'FETCH_QUIZZES_FAILURE',
    error
  }
}

export const fetchQuizzes = () => {
  return (dispatch) => {
    dispatch(startFetchQuizzes())

    const url = 'http://localhost:4567/api/quizzes/random/10'
    let quizzes = []
    axios.get(url)
      .then((response) => {
        quizzes = response.data
        dispatch(successFetchQuizzes(quizzes))
      })
      .catch((error) => {
        dispatch(failureFetchQuizzes(error))
      })
  }
}
