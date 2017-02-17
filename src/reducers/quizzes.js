const quiz = (state, action, quiz) => {
  switch (action.type) {
    case 'FETCH_QUIZZES_SUCCESS':
      return {
        id:          quiz.id,
        kanji:       quiz.kanji,
        kana:        quiz.kana,
        prefecture:  quiz.prefecture,
        level:       quiz.level,
        hint:        quiz.hint,
        description: quiz.description
      }
  }
}

const quizzes = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_QUIZZES_SUCCESS':
      let quizzes = action.quizzes.map((q) =>
        quiz(undefined, action, q)
      )
      return quizzes
    case 'FETCH_QUIZZES_FAILURE':
      return []
    default:
      return state
  }
}

export default quizzes
