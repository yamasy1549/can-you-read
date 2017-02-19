import { combineReducers } from 'redux'
import quizzes             from './quizzes'
import currentQuiz         from './currentQuiz'
import openHint            from './openHint'
import openAnswer          from './openAnswer'
import quizCount           from './quizCount'

const quizApp = combineReducers({
    quizzes,
    currentQuiz,
    openHint,
    openAnswer,
    quizCount
})
export default quizApp
