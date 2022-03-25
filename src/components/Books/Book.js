import PropTypes from 'prop-types';

const Book = (props) => {
  const { name, author } = props;

  return (
    <div className="book">
      {name}
      {author}
    </div>
  );
};

export default Book;
// Here we are defining the props that we are expecting
Book.propTypes = {
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
