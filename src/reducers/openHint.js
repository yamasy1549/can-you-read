const openHint = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_HINT':
      return !action.openHint
    case 'GOTO_NEXT_QUIZ':
    case 'GOTO_PREV_QUIZ':
    case 'RESET':
      return false
    default:
      return state
  }
}

export default openHint
