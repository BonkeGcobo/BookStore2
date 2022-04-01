import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBooktoServer } from '../../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch(); // used to ignite action on redux
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');

  const AddNewBook = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: uuidv4(),
      title,
      author,
      category: 'Fiction',
    };
    dispatch(addBooktoServer(newBook)); // dispatch to redux
    setAuthor('');
    setTitle('');
  };

  return (
    <div className="add-book">
      <h1>Add Book</h1>
      <form className="form" onSubmit={(e) => AddNewBook(e)}>
        <input type="text" placeholder="Author Name" onChange={(e) => setAuthor(e.target.value)} />
        <br />
        <br />
        <input type="text" placeholder="Book Name" onChange={(e) => setTitle(e.target.value)} />
        <br />
        <br />
        <button type="submit">AddBook</button>
      </form>
    </div>
  );
};

export default AddBook;
