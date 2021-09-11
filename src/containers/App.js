import BookList from './BookList';
import BooksForm from '../components/BooksForm';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const App = ({books}) => (
  <div className="App">
    <BookList books={ books } />
      <BooksForm />
  </div>
);

App.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

const mapStateToProps = state => ({ books: state.books });

export default connect(mapStateToProps, null)(App);