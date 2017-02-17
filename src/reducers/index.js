import { combineReducers } from 'redux'
import quizzes             from './quizzes'
import currentQuiz         from './currentQuiz'
import openHint            from './openHint'
import openAnswer          from './openAnswer'

const quizApp = combineReducers({
    quizzes,
    currentQuiz,
    openHint,
    openAnswer
})
export default quizApp
