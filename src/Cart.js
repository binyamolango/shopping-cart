import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

export const cartItem = [];

const Cart = () => {
  return (
    <div className="cart-page">
      <Container>
        <h2>My cart</h2>
        { cartItem.length === 0 ? <Badge bg="secondary">No product selected</Badge> : (
          <>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Category</th>
                </tr>
              </thead>
              <tbody>
                {cartItem.map(item => (
                  <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>{item.quantity}</td>
                    <td>{`$${item.price * item.quantity}`}</td>
                    <td>{item.category}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <Button variant="primary">Checkout</Button>
          </>
        )}
      </Container>
    </div>
  );
}
 
export default Cart;
