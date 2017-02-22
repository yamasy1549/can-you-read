const correct = (state = false, action) => {
  switch (action.type) {
    case 'CHECK_ANSWER':
      return action.correct
    default:
      return state
  }
}

export default correct
