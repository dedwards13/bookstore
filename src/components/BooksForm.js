const CATEGORIES = [
    {key:0, name:'ACTION'},
    {key:1, name:'BIOGRAPHY'},
    {key:2, name:'HISTORY'},
    {key:3, name:'HORROR'},
    {key:4, name:'KIDS'},
    {key:5, name:'LEARNING'},
    {key:6, name:'SCI-FI'}];

    const BooksForm = () => (
        <form action="#" method="POST">
          <input type="text" name="title" placeHolder="Enter the book title" />
          <select name="category">
            {
              CATEGORIES.map(({ key, name }) => <option value={name} key={key}>{name}</option>)
            }
          </select>
          <button type="button">Create book</button>
        </form>
      );
      
      export default BooksForm;