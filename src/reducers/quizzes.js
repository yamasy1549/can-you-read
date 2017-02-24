const quiz = (state, action) => {
  switch (action.type) {
    case 'FETCH_QUIZZES_SUCCESS':
      return {
        id:             state.id,
        kanji:          state.kanji,
        kana:           state.kana,
        prefecture:     state.prefecture,
        prefectureCode: state.prefecture_code,
        level:          state.level,
        hint:           state.hint,
        description:    state.description,
        correctAnswer:  undefined
      }
    case 'BE_CORRECT_ANSWER':
      return Object.assign({}, state, { correctAnswer: true })
    case 'BE_INCORRECT_ANSWER':
      return Object.assign({}, state, { correctAnswer: false })
    default:
      return state
  }
}

const quizzes = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_QUIZZES_SUCCESS':
      return action.quizzes.map((q) =>
        quiz(q, action)
      )
    case 'FETCH_QUIZZES_FAILURE':
      return []
    case 'BE_CORRECT_ANSWER':
    case 'BE_INCORRECT_ANSWER':
      return state.map((q, i) => {
        if(i == action.currentQuiz-1) {
          return quiz(q, action)
        } else {
          return q
        }
      })
    case 'RESET':
      return []
    default:
      return state
  }
}

export default quizzes
