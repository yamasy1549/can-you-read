const openHint = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_HINT':
      return !action.openHint
    default:
      return state
  }
}

export default openHint
