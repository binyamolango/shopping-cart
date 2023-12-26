import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
import { useEffect, useState } from 'react';
import useFetch from './useFetch';

const Cart = () => {
  const [cartItem, setCartItem] = useState(null);
  const { data: products } = useFetch('https://fakestoreapi.com/products');

  useEffect(() => {
    fetch('https://fakestoreapi.com/carts')
    .then(res=>res.json())
    .then(data=>setCartItem(data))
  }, [])

  return (
    <div className="cart-page">
      <Container>
        <h2>My cart</h2>
        { cartItem && cartItem.length === 0 ? <Badge bg="secondary">No product selected</Badge> : (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Products</th>
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
                        products
                          .filter(prod => prod.id === product.productId)
                          .map(filteredProd => (
                            <div key={product.productId}>
                              Name:  <strong>{filteredProd.title}</strong>, 
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
