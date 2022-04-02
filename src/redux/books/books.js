import axios from 'axios';

// Defining action types
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const FETCH_BOOKS = 'bookStore/books/FETCH_BOOKS';

// For API calls
const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
const AuthenID = '2WYDia0uF0Kvz5cTeCz9/books/';

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

export const addBooktoServer = (bookObj) => async (dispatch) => {
  await axios.post(baseUrl + AuthenID, {
    ...bookObj,
  });
  dispatch(addBook(bookObj));
};

export const fetchBooksFromServer = () => async (dispatch) => {
  const books = await axios.get(baseUrl + AuthenID);
  const mapBooks = Object.entries(books.data).map(([id, book]) => {
    const { category, title } = book[0];
    return { id, category, title };
  });
  dispatch(fetchBooks(mapBooks));
};

export const deleteBook = (id) => async (dispatch) => {
  await axios.delete(baseUrl + AuthenID + id);
  dispatch(removeBook(id));
};

// In a reducer don't use the state in the redux
const booksreducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];

    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.payload);

    case FETCH_BOOKS:
      return action.payload;

    default:
      return state;
  }
};

export default booksreducer;
