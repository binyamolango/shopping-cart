import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { cartItem } from './Cart';
import { useEffect, useState } from 'react';

const QuantityInput = (props) => {
  const { products, product } = props;
  const [quantities, setQuantities] = useState([]);

  const initializeQuantities = () => {
    const initialQuantities = {};
    products && products.forEach(product => {
      initialQuantities[product.id] = 0;
    });

    setQuantities(initialQuantities);
  };

  useEffect(() => {
    initializeQuantities();
  // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const handleAddToCart = (product) => {
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
    <><InputGroup className="mb-3 quantity__input">
      <InputGroup.Text id="inputGroup-sizing-default">
        Quantity
      </InputGroup.Text>
      <Form.Control
        aria-label="Default"
        aria-describedby="inputGroup-sizing-default"
        value={quantities[product.id] || 0}
        onChange={(e) => handleQuantityChange(product.id, e.target.value)} />
      <div className="up__down__arrow">
        <button onClick={() => incrementQuantity(product.id)}><i className="fa-solid fa-arrow-up"></i></button>
        <button onClick={() => decrementQuantity(product.id)}><i className="fa-solid fa-arrow-down"></i></button>
      </div>
    </InputGroup><Button onClick={() => handleAddToCart(product)} variant="primary">Add To Cart</Button></>
  );
}
 
export default QuantityInput;