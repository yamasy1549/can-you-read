import { combineReducers } from 'redux'
import ready               from './ready'
import playing             from './playing'
import quizzes             from './quizzes'
import currentQuiz         from './currentQuiz'
import openHint            from './openHint'
import openAnswer          from './openAnswer'
import quizCount           from './quizCount'
import results             from './results'
import animations          from './animations'

const quizApp = combineReducers({
    ready,
    playing,
    quizzes,
    currentQuiz,
    openHint,
    openAnswer,
    quizCount,
    results,
    animations
})
export default quizApp
