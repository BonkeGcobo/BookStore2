import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBooktoServer } from '../../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch(); // used to ignite action on redux
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const AddNewBook = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: uuidv4(),
      title,
      author: 'Bonke',
      category,
    };
    // console.log(newBook);
    dispatch(addBooktoServer(newBook)); // dispatch to redux
    setTitle('');
    setCategory('');
  };

  return (
    <div className="theForm">
      <h3 className="formTitle">ADD NEW BOOK</h3>
      <form className="input-form" onSubmit={(e) => AddNewBook(e)}>
        <input type="text" placeholder="Book title" className="bookTitle" onChange={(e) => setTitle(e.target.value)} />
        <input type="text" placeholder="Category" className="category" onChange={(e) => setCategory(e.target.value)} />
        <button type="submit" className="theSubmit">AddBook</button>
      </form>
    </div>
  );
};

export default AddBook;
