const quizCount = (state = 10, action) => {
  switch (action.type) {
    case 'SET_QUIZ_COUNT':
      return action.quizCount
    default:
      return state
  }
}

export default quizCount
