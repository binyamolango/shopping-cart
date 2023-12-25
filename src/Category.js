import Dropdown from 'react-bootstrap/Dropdown';

const Category = (props) => {
  const { products } = props;

  return (
    <div className="category__dropdown">
      <Dropdown>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          Categories
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Electronics</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Jewelry</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Men's clothing</Dropdown.Item>
          <Dropdown.Item href="#/action-4">Women's clothing</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
 
export default Category;