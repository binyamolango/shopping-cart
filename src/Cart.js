import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import useFetch from './useFetch';

const Cart = () => {
  const baseURL = 'https://fakestoreapi.com';
  const { data: products } = useFetch(`${baseURL}/products`);
  const { data: cartItem, isPending, error, setError } = useFetch(`${baseURL}/carts`);

  return (
    <div className="cart-page">
      <Container>
        <h2>My cart</h2>
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
        { cartItem && cartItem.length === 0 ? <Badge bg="secondary">No product selected</Badge> : (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Selected Products</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {cartItem && cartItem.map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>
                    {
                      item.products && item.products.map(product => (
                        products && products
                          .filter(prod => prod.id === product.productId)
                          .map((filteredProd, idx) => (
                            <div key={product.productId}>
                              - Name:  <strong>{filteredProd.title}</strong>, 
                              Quantity:  <strong>{product.quantity}</strong>, 
                              Price:  <strong>{`$${product.quantity * filteredProd.price}`}</strong>
                            </div>
                          ))
                      ))
                    }
                  </td>
                  <td>{item.date}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Container>
    </div>
  );
}
 
export default Cart;
