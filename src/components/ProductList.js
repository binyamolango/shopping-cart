import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import QuantityInput from './QuantityInput';

const ProductList = (props) => {
  const { products } = props;

  return (
    <Row>
      {products && products.map((product) => (
        <Col xs={12} md={6} lg={4} key={product.id}>
          <Card className='card__row'>
            <Card.Img variant="top" src={product.image} alt='prod_img' />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{`$${product.price}`}</Card.Text>
              <QuantityInput products={products} product={product} />
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
 
export default ProductList;