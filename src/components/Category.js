import Dropdown from 'react-bootstrap/Dropdown';

const Category = (props) => {
  const {
    handleAllProducts,
    handleElectronicsProducts,
    handleJeweleryProducts,
    handleMenClothingProducts,
    handleWomenClothingProducts,
    category
  } = props;

  return (
    <div className="category__dropdown">
      <Dropdown>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          {category}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={handleAllProducts}>All Products</Dropdown.Item>
          <Dropdown.Item onClick={handleElectronicsProducts}>Electronics</Dropdown.Item>
          <Dropdown.Item onClick={handleJeweleryProducts}>Jewelry</Dropdown.Item>
          <Dropdown.Item onClick={handleMenClothingProducts}>Men's clothing</Dropdown.Item>
          <Dropdown.Item onClick={handleWomenClothingProducts}>Women's clothing</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
 
export default Category;