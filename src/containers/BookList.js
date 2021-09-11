import PropTypes from 'prop-types';
import Book from '../components/Book';
import { connect } from 'react-redux';
import { createBook, deleteBook } from '../actions';

const BookList = ({ books }) => (
    books.map(
        book => <tr key={book.id}><Book book={book} /></tr>,
        )
  );
  
  BookList.propTypes = {
    books: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };
  
  export default BookList;
  const mapStateToProps = state => ({ books: state.books });
const mapDispatchToProps = dispatch => ({
  create: book => dispatch(createBook(book)),
  delete: book => dispatch(deleteBook(book)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);