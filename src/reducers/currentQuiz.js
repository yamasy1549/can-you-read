const currentQuiz = (state = 1, action) => {
  switch (action.type) {
    case 'GOTO_NEXT_QUIZ':
    case 'GOTO_PREV_QUIZ':
      return action.currentQuiz
    default:
      return state
  }
}

export default currentQuiz
