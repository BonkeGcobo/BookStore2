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
        const { item_id, category, title } = book;
        return (<Book key={item_id} item_id={item_id} category={category} title={title} />);
      })}
    </div>
  );
};

export default BookList;
