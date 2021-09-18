import React from 'react';
import PropTypes from 'prop-types';

export const CATEGORIES = [
  { key: 0, name: 'Action' },
  { key: 1, name: 'Biography' },
  { key: 2, name: 'History' },
  { key: 3, name: 'Horror' },
  { key: 4, name: 'Kids' },
  { key: 5, name: 'Learning' },
  { key: 6, name: 'Sci-Fi' },
];

const CategoryFilter = ({ handleFilter }) => (
  <label htmlFor="filterCategories" className="flex align-c">
    <select name="filterCategories" onChange={handleFilter} id="filterCategories" className="pointer">
      <option value="All">Categories</option>
      {
        CATEGORIES.map(category => (
          <option value={category.name} key={category.key}>
            {category.name}
          </option>
        ))
      }
    </select>
  </label>
);

CategoryFilter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default CategoryFilter;
