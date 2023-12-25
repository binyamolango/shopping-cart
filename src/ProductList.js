import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { cartItem } from './Cart';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useEffect, useState } from 'react';

const ProductList = (props) => {
  const { products } = props;

  const defaultQuantities = products.reduce((acc, product) => {
    acc[product.id] = 0;
    return acc;
  }, {});

  const [quantities, setQuantities] = useState(defaultQuantities);

  const initializeQuantities = () => {
    const initialQuantities = {};
    products.forEach(product => {
      initialQuantities[product.id] = 0;
    });

    setQuantities(initialQuantities);
  };

  useEffect(() => {
    initializeQuantities();
  }, [products]);

  const incrementQuantity = (productId) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [productId]: prevQuantities[productId] + 1
    }));
  };

  const decrementQuantity = (productId) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [productId]: Math.max(0, prevQuantities[productId] - 1)
    }));
  };

  const handleQuantityChange = (productId, newQuan) => {
    if (newQuan <= 0) {
      return;
    }
    
    const newQuantity = Math.max(0, newQuan);

    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [productId]: newQuantity
    }))
  }

  const handleClick = (product) => {
    const existingItemIndex = cartItem.findIndex(item => item.id === product.id);

    if (existingItemIndex !== -1) {
      cartItem[existingItemIndex].quantity += quantities[product.id];
    } else if (quantities[product.id] === 0) {
      return;
    } else {
      cartItem.push({
        id: product.id,
        title: product.title,
        price: product.price,
        category: product.category,
        quantity: quantities[product.id]
      })
    };

    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [product.id]: 0
    }));
  };

  return (
    <Row>
      {products.map((product) => (
        <Col xs={6} md={4} key={product.id}>
          <Card className='card__row'>
            <Card.Img variant="top" src={product.img} alt='prod_img' />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.price}</Card.Text>
              <InputGroup className="mb-3 quantity__input">
                <InputGroup.Text id="inputGroup-sizing-default">
                  Quantity
                </InputGroup.Text>
                <Form.Control
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  value={quantities[product.id]}
                  onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                />
                <div className="up__down__arrow">
                  <button onClick={() => incrementQuantity(product.id)}><i className="fa-solid fa-arrow-up"></i></button>
                  <button onClick={() => decrementQuantity(product.id)}><i className="fa-solid fa-arrow-down"></i></button>
                </div>
              </InputGroup>
              <Button onClick={() => handleClick(product)} variant="primary">Add To Cart</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
 
export default ProductList;