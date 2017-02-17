const currentQuiz = (state = 0, action) => {
  switch (action.type) {
    case 'GOTO_NEXT_QUIZ':
      return action.currentQuiz
    case 'GOTO_PREV_QUIZ':
      return action.currentQuiz
    default:
      return state
  }
}

export default currentQuiz
