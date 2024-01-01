import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { cartItem } from './Cart';
import { useState } from 'react';

const QuantityInput = (props) => {
  const { product } = props;
  const [quantities, setQuantities] = useState(0);

  const handleAddToCart = (product) => {
    if (Number(quantities) <= 0) {
      return;
    }
    
    const existingItemIndex = cartItem.findIndex(item => item.id === product.id);

    if (existingItemIndex !== -1) {
      cartItem[existingItemIndex].quantity += Number(quantities);
    } else {
      cartItem.push({
        id: product.id,
        title: product.title,
        price: product.price,
        category: product.category,
        quantity: Number(quantities)
      })
    };

    setQuantities(0);
  };

  return (
    <><InputGroup className="mb-3 quantity__input">
      <InputGroup.Text id="inputGroup-sizing-default">
        Quantity
      </InputGroup.Text>
      <Form.Control
        aria-label="Default"
        aria-describedby="inputGroup-sizing-default"
        type="number"
        value={quantities}
        onChange={(e) => setQuantities(e.target.value)}
      />
    </InputGroup><Button onClick={() => handleAddToCart(product)} variant="primary">Add To Cart</Button></>
  );
}
 
export default QuantityInput;