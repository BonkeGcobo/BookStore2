import PropTypes from 'prop-types';
import React from 'react';

const Book = (props) => {
  const { id, name, title } = props;

  return (
    <>
      <div className="book">
        <p className="bookTitle">{name}</p>
        <p className="bookAuthor">{title}</p>

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
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
