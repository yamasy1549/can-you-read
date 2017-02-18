const openAnswer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_ANSWER':
      return !action.openAnswer
    case 'GOTO_NEXT_QUIZ':
    case 'GOTO_PREV_QUIZ':
      return false
    default:
      return state
  }
}

export default openAnswer
