import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../../redux/books/books';
import ProgressBar from './ProgressBar';

const Book = (props) => {
  const { id, category, title } = props;
  const dispatch = useDispatch();

  const deleteBookHandler = (id) => {
    dispatch(deleteBook(id));
  };

  return (
    <>
      <div id={id} className="bookCard">
        <div className="BookDetails">
          <p className="category-sec">{category}</p>
          <h3>{title}</h3>

          <div className="theButtons">
            <button type="button" className="theBtns">Comments</button>
            <button type="button" className="theBtns delete" onClick={() => deleteBookHandler(id)}>Delete</button>
            <button type="button" className="theBtns">Edit</button>
          </div>
        </div>
        <ProgressBar />
      </div>
    </>
  );
};

export default Book;
// Here we are defining the props that we are expecting
Book.propTypes = {
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
