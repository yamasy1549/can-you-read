const ready = (state = false, action) => {
  switch (action.type) {
    case 'FETCH_QUIZZES_SUCCESS':
      return true
    case 'RESET':
      return false
    default:
      return state
  }
}

export default ready
