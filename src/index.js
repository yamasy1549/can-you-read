import React                             from 'react'
import thunk                             from 'redux-thunk'
import promise                           from 'redux-promise'
import createLogger                      from 'redux-logger';
import { render }                        from 'react-dom'
import { Provider }                      from 'react-redux'
import { applyMiddleware, createStore }  from 'redux'
import App                               from './components/App'
import quizzes                           from './reducers'
import { initialize }                    from './actions'

const store = createStore(
  quizzes,
  applyMiddleware(thunk, promise)
)

store.dispatch(initialize(5))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
