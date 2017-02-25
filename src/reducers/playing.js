const playing = (state = false, action) => {
  switch (action.type) {
    case 'START_TO_PLAY':
      return true
    case 'RESET':
      return false
    default:
      return state
  }
}

export default playing
