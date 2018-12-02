import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

import reducer from './reducer/main-reducer'

const store = createStore(
  reducer,
  applyMiddleware(logger)
);

export default store;
