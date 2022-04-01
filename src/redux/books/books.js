import axios from 'axios';

// Defining action types
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const FETCH_BOOKS = 'bookStore/books/FETCH_BOOKS';

//For API calls
const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
const AuthenID = 'RpgQNvoFG8rdrlonQoge/books/';

// Setting an intialState
const initialState = [];

// Export action creators which returns an actions
export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const fetchBooks = (payload) => ({
  type: FETCH_BOOKS,
  payload,
});

export const fetchBooksFromServer = () => async (dispatch) => {
  const books = await axios.get(baseUrl + AuthenID);
  console.log(books);
};

// In a reducer don't use the state in the redux
const booksreducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);

    default:
      return state;
  }
};

export default booksreducer;
