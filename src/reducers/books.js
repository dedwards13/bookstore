import {ADD_BOOK, REMOVE_BOOK} from '../actions';

const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  const state = [
    { id: getRandomIntInclusive(1, 1000), title: 'REACT', category: 'JavaScript' },
    { id: getRandomIntInclusive(1, 1000), title: 'REDUX', category: 'JavaScript' },
    { id: getRandomIntInclusive(1, 1000), title: 'RUBY', category: 'Ruby' },
    { id: getRandomIntInclusive(1, 1000), title: 'RAILS', category: 'Ruby' },
  ];
  
  const booksReducer = (state, action) => {
    switch(action.type) {
      case ADD_BOOK:
        return {...state, book: action.book }
      case REMOVE_BOOK:
        return state;
      default:
        return state;
    }
  };
  
  export default booksReducer; 