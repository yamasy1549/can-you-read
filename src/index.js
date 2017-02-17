import React                             from 'react'
import thunk                             from 'redux-thunk';
import { render }                        from 'react-dom'
import { Provider }                      from 'react-redux'
import { applyMiddleware, createStore }  from 'redux'
import App                               from './components/App'
import quizzes                           from './reducers'
import { fetchQuizzes }                  from './actions'

let store = createStore(
    quizzes,
    applyMiddleware(thunk)
)

store.dispatch(fetchQuizzes())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
