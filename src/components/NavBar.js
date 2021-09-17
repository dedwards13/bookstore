import React from 'react';
import '../stylesheets/App.css';
import { connect } from 'react-redux';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import CategoryFilter from './CategoryFilter';
import { CHANGE_FILTER, CHANGE_VISIBILITY } from '../actions';

const NavBar = ({ handleChangeFilter: changeFilter, handleVisibility: changeVisibity }) => {
  const handleFilter = e => {
    changeFilter(e.target.value);
    changeVisibity(e.target.value);
  };
  return (
    <>
      <header>
        <nav className="p-100 nav pos-rel flex">
          <h1 className="title pointer">BookStore CMS</h1>
          <div className="right-cont align-c flex">
            <p className="book-header-title pointer">BOOKS</p>
            <CategoryFilter handleFilter={handleFilter} />
          </div>
          <div className="prof pointer flex align-c just-c">
            <FontAwesomeIcon icon={faUser} />
          </div>
        </nav>
      </header>
    </>
  );
};

NavBar.propTypes = {
  handleChangeFilter: PropTypes.func.isRequired,
  handleVisibility: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  handleChangeFilter: filter => (dispatch({ type: CHANGE_FILTER, filter })),
  handleVisibility: filter => (dispatch({ type: CHANGE_VISIBILITY, filter })),
});

export default connect(null, mapDispatchToProps)(NavBar);
