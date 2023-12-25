import Container from 'react-bootstrap/Container';
import ProductList from './ProductList';
import Category from './Category';
import { useEffect, useState } from 'react';

const Product = () => {
  const [products, setProducts] = useState(null);
  const [category, setCategory] = useState('')

  const url = 'https://fakestoreapi.com/products';

  useEffect(() => {
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
      setProducts(data);
    });
    setCategory("Select Category")
  }, []);

  const handleAllProducts = () => {
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
      setProducts(data);
    });
    setCategory('All Products')
  };

  const handleElectronicsProducts = () => {
    fetch(`${url}/category/electronics`)
    .then(res=>res.json())
    .then(data=>{
      setProducts(data);
    });
    setCategory('Electronics')
  };

  const handleJeweleryProducts = () => {
    fetch(`${url}/category/jewelery`)
    .then(res=>res.json())
    .then(data=>{
      setProducts(data);
    });
    setCategory('Jewelry')
  };

  const handleMenClothingProducts = () => {
    fetch(`${url}/category/men's clothing`)
    .then(res=>res.json())
    .then(data=>{
      setProducts(data);
    });
    setCategory("Men's Clothing")
  };

  const handleWomenClothingProducts = () => {
    fetch(`${url}/category/women's clothing`)
    .then(res=>res.json())
    .then(data=>{
      setProducts(data);
    });
    setCategory("Women's Clothing")
  };

  return (
    <div className="product-page">
      <Container>
        <Category
          handleAllProducts={handleAllProducts}
          handleElectronicsProducts={handleElectronicsProducts}
          handleJeweleryProducts={handleJeweleryProducts}
          handleMenClothingProducts={handleMenClothingProducts}
          handleWomenClothingProducts={handleWomenClothingProducts}
          category={category}
        />
        <ProductList products={products} />
      </Container>
    </div>
  );
}
 
export default Product;
