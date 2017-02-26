const initialState = {
  loaded: false
}

const animations = (state = initialState, action) => {
  switch (action.type) {
    case 'ANIM_LOADED':
      return {
        loaded: true
      }
    case 'RESET':
      return initialState
    default:
      return state
  }
}

export default animations
