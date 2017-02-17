const openAnswer = (state = false, action) => {
  switch (action.type) {
    case 'OPEN_ANSWER':
      return action.openHAnswerint
    case 'OPEN_ANSWER':
      return action.openAnswer
    default:
      return state
  }
}

export default openAnswer
