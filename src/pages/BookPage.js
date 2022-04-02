import BookList from '../components/Books/BookList';
import AddBook from '../components/Books/AddBook';

const BookPage = () => (
  <div className="bookPage">
    <BookList />
    <hr />
    <AddBook />
  </div>
);

export default BookPage;
