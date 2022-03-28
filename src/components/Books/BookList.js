import Book from './Book';

const BookList = () => {
  const bookArray = [
    { id: 1, title: 'Born a crime', author: 'Trevor Noah' },
    { id: 2, title: 'The Good Spice', author: 'Madix' },
  ];

  return (
    <div>
      {bookArray.map((book) => (<Book key={book.id} name={book.title} author={book.author} />))}
    </div>
  );
};

export default BookList;
