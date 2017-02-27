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

export const animLoading = (quizzes) => {
  const duration = 230
  const loadingImg = document.getElementById('animLoading_Img')

  loadingImg.animate([
    { opacity: '1' },
    { opacity: '0' }
  ], {
    duration: duration,
    easing: 'cubic-bezier(0.165, 0.84, 0.44, 1)' // var(--ease-out-quart)
  })

  return (dispatch) => {
    setTimeout((duration) => {
      dispatch(successFetchQuizzes(quizzes))
    }, duration)
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
        dispatch(animLoading(quizzes))
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

export const animAppearQuiz = () => {
  const level = document.getElementById('animLevel')
  const quiz = document.getElementById('animQuiz')

  level.style.display = 'block'
  quiz.style.display = 'block'

  return {
    type: 'APPEAR_CURRENT_QUIZ'
  }
}

export const animClearAllQuiz = () => {
  const header = document.getElementById('animHeader')
  const level = document.getElementById('animLevel')
  const quiz = document.getElementById('animQuiz')
  const hintWrapper = document.getElementById('animHint_Wrapper')
  const answerFormWrapper = document.getElementById('animAnswerForm_Wrapper')

  header.style.display = 'none'
  level.style.display = 'none'
  quiz.style.display = 'none'
  hintWrapper.style.display = 'none'
  answerFormWrapper.style.display = 'none'

  return {
    type: 'CLEAR_ALL_QUIZ'
  }
}

export const animClearQuiz = () => {
  const level = document.getElementById('animLevel')
  const quiz = document.getElementById('animQuiz')

  level.style.display = 'none'
  quiz.style.display = 'none'

  return {
    type: 'CLEAR_CURRENT_QUIZ'
  }
}

export const animGotoNextQuiz = (currentQuiz, quizCount) => {
  const duration = 1200
  const answer = document.getElementById('animAnswer')
  const nextButton = document.getElementById('animAnswer_NextButton')

  return (dispatch) => {
    dispatch(animClearQuiz())

    answer.animate([
      {
        clipPath: 'circle(100vw at 50% 86vh)',
        background: '#FA7C7D' // var(--pink)
      },
      {
        clipPath: 'circle(0px at 50% 86vh)',
        background: '#F38139' // var(--orange)
      }
    ], {
      duration: duration,
      easing: 'cubic-bezier(0.165, 0.84, 0.44, 1)' // var(--ease-out-quart)
    })

    nextButton.animate([
      { opacity: '1' },
      { opacity: '0' }
    ], {
      duration: duration,
      easing: 'cubic-bezier(0.165, 0.84, 0.44, 1)' // var(--ease-out-quart)
    })

    setTimeout(() => {
      dispatch(gotoNextQuiz(currentQuiz, quizCount))
      dispatch(animAppearQuiz())
    }, duration)
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

export const passAnswer = () => {
  return {
    type: 'PASS_ANSWER'
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

export const animStartToPlay = () => {
  const duration = 1730
  const button = document.getElementById('animStart_Button')
  const buttonWave = document.getElementById('animStart_ButtonWave')
  const buttonText = document.getElementById('animStart_ButtonText')

  button.animate([
    {
      background: '#EC3F33', // var(--red)
      width: '70px',
      height: '70px'
    },
    {
      background: '#F38139', // var(--orange)
      width: '55px',
      height: '55px'
    }
  ], {
    duration: duration,
    easing: 'cubic-bezier(0.165, 0.84, 0.44, 1)' // var(--ease-out-quart)
  })

  buttonWave.animate([
    {
      width: '70px',
      height: '70px',
      right: 'calc(50% - 35px)',
      top: 'calc(50% - 35px)',
      border: '#EC3F33 5px solid', // var(--red)
      opacity: '1'
    },
    {
      width: '230px',
      height: '230px',
      right: 'calc(50% - 115px)',
      top: 'calc(50% - 115px)',
      border: '#F38139 0px solid', // var(--orange)
      opacity: '0'
    }
  ], {
    duration: duration,
    easing: 'cubic-bezier(0.19, 1, 0.22, 1)' // var(--ease-out-expo)
  })

  buttonText.animate([
    {
      opacity: '1',
      transform: 'scale(1)'
    },
    {
      opacity: '0',
      transform: 'scale(2)'
    }
  ], {
    duration: duration,
    easing: 'cubic-bezier(0.165, 0.84, 0.44, 1)' // var(--ease-out-quart)
  })

  return (dispatch) => {
    setTimeout(() => {
      dispatch(startToPlay())
    }, duration-500) // TODO: アニメーションががたつく
  }
}
