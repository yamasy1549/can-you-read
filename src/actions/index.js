let currentQuiz = 0

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

export const gotoNextQuiz = () => {
  return {
    type: 'GOTO_NEXT_QUIZ',
    currentQuiz: ++currentQuiz
  }
}

export const gotoPrevQuiz = () => {
  return {
    type: 'GOTO_PREV_QUIZ',
    currentQuiz: --currentQuiz
  }
}

export const openHint = () => {
  return {
    type: 'OPEN_HINT',
    openHint: true
  }
}

export const closeHint = () => {
  return {
    type: 'CLOSE_HINT',
    openHint: false
  }
}

export const openAnswer = () => {
  return {
    type: 'OPEN_ANSWER',
    openAnswer: true
  }
}

export const closeAnswer = () => {
  return {
    type: 'CLOSE_ANSWER',
    openAnswer: false
  }
}
