import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/Book.css';

const Book = ({ book, delete: handleRemoveBook }) => (
  <li className={`${book.visible ? 'book-card flex align-c' : 'd-none'}`}>
    <div>
      <div className="main-info">
        <div>
          <h4 className="book-cat op-5">{book.category}</h4>
        </div>
        <div>
          <h3 className="book-title">{book.title}</h3>
        </div>
        <div className="book-id fw-300">
          {`Book ID: ${book.id}`}
        </div>
      </div>

      <div className="lower-btns fw-300 flex align-c">
        <p className="pointer">Comments</p>
        <div className="btn-divider" />
        <button
          className="rmv-btn fw-300 pointer"
          type="button"
          onClick={() => handleRemoveBook(book)}
        >
          Remove
        </button>
        <div className="btn-divider" />
        <p className="pointer">Edit</p>
      </div>
    </div>

    <div className="progress flex align-c">
      <i className="porcentage-oval flex align-c" />
      <div className="porcentage-cont">
        <p className="porcentage">64%</p>
        <p className="completed op-5">Completed</p>
      </div>
    </div>

    <div className="divider" />

    <div className="chapter-cont">
      <p className="current-ch fw-300 op-5">CURRENT CHAPTER</p>
      <p className="chapter fw-300">Chapter 17</p>
      <button type="button" className="updt-progress fw-300 pointer" onClick={() => handleRemoveBook(book)}>
        Update Progress
      </button>
    </div>
  </li>
);

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    visible: PropTypes.bool.isRequired,
  }).isRequired,
  delete: PropTypes.func.isRequired,
};

export default Book;
