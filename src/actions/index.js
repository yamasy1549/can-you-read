import axios from 'axios'

export const initialize = (quizCount) => {
  return (dispatch) => {
    dispatch(reset())
    dispatch(setQuizCount(quizCount))
    dispatch(fetchQuizzes(quizCount))
  }
}

export const reset = () => {
  return {
    type: 'RESET'
  }
}

export const setQuizCount = (quizCount) => {
  return {
    type: 'SET_QUIZ_COUNT',
    quizCount
  }
}

export const startToPlay = () => {
  return {
    type: 'START_TO_PLAY'
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

export const fetchQuizzes = (quizCount) => {
  return (dispatch) => {
    dispatch(startFetchQuizzes())

    const url = 'http://localhost:4567/api/quizzes/random/' + String(quizCount)
    // const url = 'https://can-you-read.herokuapp.com/api/quizzes/random/' + String(quizCount)
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

export const gotoNextQuiz = (currentQuiz, quizCount) => {
  const newCurrentQuiz = (quizCount < currentQuiz+1) ? quizCount : ++currentQuiz
  return {
    type: 'GOTO_NEXT_QUIZ',
    newCurrentQuiz
  }
}

export const gotoPrevQuiz = (currentQuiz) => {
  const newCurrentQuiz =  (currentQuiz-1 < 1) ? 1 : --currentQuiz
  return {
    type: 'GOTO_PREV_QUIZ',
    newCurrentQuiz
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

export const checkAnswer = (input, answer, currentQuiz) => {
  const correctAnswer = (input === answer) ? true : false
  if(correctAnswer) {
    return {
      type: 'BE_CORRECT_ANSWER',
      currentQuiz
    }
  } else {
    return {
      type: 'BE_INCORRECT_ANSWER',
      currentQuiz
    }
  }
}

export const tallyAnswers = (quizzes) => {
  let pass = 0
  let correct = 0
  let incorrect = 0

  quizzes.map((quiz) => {
    let correctAnswer = quiz.correctAnswer
    if(correctAnswer == null) {
      pass++
    } else if(correctAnswer) {
      correct++
    } else {
      incorrect++
    }
  })

  return {
    type: 'TALLY_ANSWERS',
    pass,
    correct,
    incorrect
  }
}

export const doSomething = (e) => {
  const duration = 1000

  e.target.animate([
    { transform: 'translate3D(0, 0, 0)' },
    { transform: 'translate3D(0, -300px, 0)' }
  ], {
    duration: duration
  })

  return (dispatch) => {
    setTimeout((duration) => {
      dispatch(startToPlay())
    }, duration)
  }
}
