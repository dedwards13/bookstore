import { CREATE_BOOK, REMOVE_BOOK, CHANGE_VISIBILITY } from '../actions';

export const getRandomIntInclusive = (minimum, maximum) => {
  const min = Math.ceil(minimum);
  const max = Math.floor(maximum);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const defaultState = [
  {
    id: getRandomIntInclusive(1, 1000),
    title: 'Genghis Khan',
    category: 'History',
    visible: true,
  },
  {
    id: getRandomIntInclusive(1, 1000),
    title: 'The Martian',
    category: 'Sci-Fi',
    visible: true,
  },
  {
    id: getRandomIntInclusive(1, 1000),
    title: 'House of Leaves',
    category: 'Horror',
    visible: true,
  },
];

const booksReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [
        ...state, {
          id: getRandomIntInclusive(1, 1000),
          title: action.book.title,
          category: action.book.category,
          visible: true,
        },
      ];
    case REMOVE_BOOK:
      return state.filter(book => book.id !== action.book.id);
    case CHANGE_VISIBILITY:
      return state.map(book => {
        if (action.filter === 'All') {
          return { ...book, visible: true };
        }
        if (book.category !== action.filter) {
          return { ...book, visible: false };
        }
        return { ...book, visible: true };
      });
    default:
      return state;
  }
};

export default booksReducer;
