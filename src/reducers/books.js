import {CREATE_BOOK, REMOVE_BOOK} from '../actions';

const getRandomIntInclusive = (minimum, maximum) => {
    const min = Math.ceil(minimum);
    const max = Math.floor(maximum);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  const defaultState = [
    { id: getRandomIntInclusive(1, 1000), title: 'REACT', category: 'JavaScript' },
    { id: getRandomIntInclusive(1, 1000), title: 'REDUX', category: 'JavaScript' },
    { id: getRandomIntInclusive(1, 1000), title: 'RUBY', category: 'Ruby' },
    { id: getRandomIntInclusive(1, 1000), title: 'RAILS', category: 'Ruby' },
  ];
  
  const booksReducer = (state=defaultState, action) => {
    switch (action.type) {
      case CREATE_BOOK:
        return { ...state, book: action.book }
      case REMOVE_BOOK:
        return state.filter(book => book.id !== action.book.id);
      default:
        return state;
    }
  };
  
  export default booksReducer; 