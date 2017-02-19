import axios from 'axios'

let currentQuiz = 1
const quizCount = 10

export const setQuizCount = () => {
  return {
    type: 'SET_QUIZ_COUNT',
    quizCount
  }
}

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

    const url = 'http://localhost:4567/api/quizzes/random/' + String(quizCount)
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
  currentQuiz = (quizCount < currentQuiz+1) ? quizCount : ++currentQuiz
  return {
    type: 'GOTO_NEXT_QUIZ',
    currentQuiz
  }
}

export const gotoPrevQuiz = () => {
  currentQuiz =  (currentQuiz-1 < 1) ? 1 : --currentQuiz
  return {
    type: 'GOTO_PREV_QUIZ',
    currentQuiz
  }
}

export const toggleHint = (openHint) => {
  return {
    type: 'TOGGLE_HINT',
    openHint
  }
}

export const toggleAnswer = (openAnswer) => {
  return {
    type: 'TOGGLE_ANSWER',
    openAnswer
  }
}
