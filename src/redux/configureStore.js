import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import booksReducer from './books/books';
import categoryReducer from './categories/categories';

const reducer = combineReducers({
  booksReducer,
  categoryReducer,
  // Additional Reducers will be added here
});

const store = createStore(
  reducer,
  applyMiddleware(logger),
);

export default store;
