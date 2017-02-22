import { combineReducers } from 'redux'
import quizzes             from './quizzes'
import currentQuiz         from './currentQuiz'
import openHint            from './openHint'
import openAnswer          from './openAnswer'
import quizCount           from './quizCount'
import correct             from './correct'

const quizApp = combineReducers({
    quizzes,
    currentQuiz,
    openHint,
    openAnswer,
    quizCount,
    correct
})
export default quizApp
