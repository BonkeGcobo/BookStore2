import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../../redux/books/books';

const Book = (props) => {
  const { id, name, title } = props;
  const dispatch = useDispatch();

  const deleteBookHandler = (id) => {
    dispatch(deleteBook(id));
  };

  return (
    <>
      <div className="book">
        <p className="bookTitle">{name}</p>
        <p className="bookAuthor">{title}</p>

        <button type="submit" onClick={() => deleteBookHandler(id)}>
          Delete
        </button>
      </div>
    </>

  );
};

export default Book;
// Here we are defining the props that we are expecting
Book.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
