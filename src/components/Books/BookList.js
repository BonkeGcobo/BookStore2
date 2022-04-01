/* eslint-disable camelcase */
/* eslint-disable no-undef */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooksFromServer } from '../../redux/books/books';
import Book from './Book';

const BookList = () => {
  const bookArray = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooksFromServer());
  }, []);

  return (
    <div className="bookList">
      {bookArray.map((book) => {
        const { item_id, author, title } = book;
        const id = item_id;
        return (<Book key={id} id={id} name={author} title={title} />);
      })}
    </div>
  );
};

export default BookList;
