import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooksFromServer } from '../../redux/books/books';
import Book from './Book';

const BookList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooksFromServer());
  });
  const bookArray = useSelector((state) => state.booksReducer);

  return (
    <div>
      {bookArray.map((book) => {
        const { id, author, title } = book;
        return (<Book key={id} id={id} name={author} title={title} />);
      })}
    </div>
  );
};

export default BookList;
