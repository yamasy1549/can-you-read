import { combineReducers } from 'redux'
import quizzes             from './quizzes'
import currentQuiz         from './currentQuiz'
import openHint            from './openHint'

const quizApp = combineReducers({
    quizzes,
    currentQuiz,
    openHint
})
export default quizApp
