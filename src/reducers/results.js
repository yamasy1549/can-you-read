const results = (state = {}, action) => {
  switch (action.type) {
    case 'TALLY_ANSWERS':
      return {
        pass: action.pass,
        correct: action.correct,
        incorrect: action.incorrect
      }
    default:
      return state
  }
}

export default results
