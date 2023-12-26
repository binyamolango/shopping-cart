import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import ProductList from './ProductList';
import Category from './Category';
import { useEffect, useState } from 'react';

const Product = () => {
  const [products, setProducts] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState('');

  const url = 'https://fakestoreapi.com/products';

  useEffect(() => {
    fetch(url)
    .then(res=>{
      if(!res.ok) {
        throw Error("404 Error, Couldn't fetch the data!")
      } else {
        return res.json();
      }
    })
    .then(data=>{
      setProducts(data);
      setIsPending(false);
    })
    .catch(err => {
      setError(err.message);
      setIsPending(false);
    })
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
        {isPending && (
          <div className="spinner__loading">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        )}
        {error && (
          <div className='error__message'>
            <Alert variant="danger" onClose={() => setError(null)} dismissible>
              <Alert.Heading>{error}</Alert.Heading>
              <p>
                The system is not able to reach the required server for fetching the data.
                There could some problem with the API address.
              </p>
            </Alert>
          </div>
        )}
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
