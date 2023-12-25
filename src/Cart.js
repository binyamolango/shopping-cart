import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';

const Cart = () => {
  return (
    <div className="cart-page">
      <Container>
        <h1>Hello, this is my cart.</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
}
 
export default Cart;
