const CATEGORIES = [
  { key: 0, name: 'ACTION' },
  { key: 1, name: 'BIOGRAPHY' },
  { key: 2, name: 'HISTORY' },
  { key: 3, name: 'HORROR' },
  { key: 4, name: 'KIDS' },
  { key: 5, name: 'LEARNING' },
  { key: 6, name: 'SCI-FI' }];

const BooksForm = () => (
  <form className="row g-3">
    <div className="col-md-12">
      <label htmlFor="inputTitle" className="form-label">
        Title
        <input type="text" className="form-control" id="inputTitle" />
      </label>
    </div>
    <div className="col-md-12">
      <label htmlFor="category" className="form-label">
        Category
        <select name="category" className="form-select" id="category">
          {
                CATEGORIES.map(({ key, name }) => <option value={name} key={key}>{name}</option>)
              }
        </select>
      </label>
    </div>
    <div className="col-md-12">
      <button type="button" className="btn btn-primary">Create book</button>
    </div>
  </form>
);

export default BooksForm;
