import { combineReducers } from 'redux'
import quizzes             from './quizzes'
import currentQuiz         from './currentQuiz'

const quizApp = combineReducers({
    quizzes,
    currentQuiz
})
export default quizApp
