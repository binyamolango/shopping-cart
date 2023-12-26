import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import ProductList from './ProductList';
import Category from './Category';
import useFetch from './useFetch';

const Product = () => {
  const baseURL = 'https://fakestoreapi.com';

  const {
    data: products,
    isPending,
    error,
    category,
    setError,
    handleAllProducts,
    handleElectronicsProducts,
    handleJeweleryProducts,
    handleMenClothingProducts,
    handleWomenClothingProducts
  } = useFetch(`${baseURL}/products`);

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
