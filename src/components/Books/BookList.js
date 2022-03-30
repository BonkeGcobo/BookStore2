import { useSelector } from 'react-redux';
import Book from './Book';

const BookList = () => {
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
