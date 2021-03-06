import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import booksReducer from './books/books';
import categoryReducer from './categories/categories';

const reducer = combineReducers({
  booksReducer,
  categoryReducer,
  // Additional Reducers will be added here
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(logger, thunk)),
);

export default store;
