import Container from 'react-bootstrap/Container';
import ProductList from './ProductList';
import Category from './Category';
import { useEffect, useState } from 'react';

const Product = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(data=>{
      setProducts(data);
      console.log(data);
    });
  }, []);

  return (
    <div className="product-page">
      <Container>
        <Category products={products} />
        <ProductList products={products} />
      </Container>
    </div>
  );
}
 
export default Product;
