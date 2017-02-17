const openHint = (state = false, action) => {
  switch (action.type) {
    case 'OPEN_HINT':
      return action.openHint
    case 'OPEN_HINT':
      return action.openHint
    default:
      return state
  }
}

export default openHint
