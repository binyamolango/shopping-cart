import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ProductList = (props) => {
  const { products } = props;

  return (
    <Row>
      {products.map((product) => (
        <Col xs={6} md={4} key={product.id}>
          <Card className='card__row'>
            <Card.Img variant="top" src={product.img} alt='prod_img' />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.price}</Card.Text>
              <Button variant="primary">Add To Cart</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
 
export default ProductList;