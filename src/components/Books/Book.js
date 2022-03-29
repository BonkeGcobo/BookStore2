import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import removeBook from '../../redux/books/books';


const Book = (props) => {
  const {id, name, author } = props;
  const dispatch = useDispatch();

  return (
    <>
      <div className="book">
        <p className="bookTitle">{name}</p>
        <p className="bookAuthor">{author}</p>

        <button type="button">
          Delete
        </button>
      </div>
    </>

  );
};

export default Book;
// Here we are defining the props that we are expecting
Book.propTypes = {
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
