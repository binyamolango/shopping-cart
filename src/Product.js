import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Product = () => {
  const products = [
    {
      title: "Laptop",
      img: "https://m.media-amazon.com/images/I/816uW9q6BKS._AC_UF1000,1000_QL80_.jpg",
      price: "$40",
      category: "electronics",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a dolor quis metus commodo interdum quis a odio. Aenean congue augue sit amet risus faucibus cursus. In in eros ac mauris eleifend condimentum ut id lorem. Suspendisse purus ex, semper ac lacinia luctus, volutpat a nibh. Integer facilisis arcu tellus, sit amet tempus massa ultricies eget. Nam varius arcu fringilla, lacinia nunc quis, consectetur ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur a tempor augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut tempor posuere mauris eu ultrices.",
      id: 1
    },
    {
      title: "Neckless",
      img: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81GOtF13cZL._AC_UY1100_.jpg",
      price: "$50",
      category: "jewelry",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a dolor quis metus commodo interdum quis a odio. Aenean congue augue sit amet risus faucibus cursus. In in eros ac mauris eleifend condimentum ut id lorem. Suspendisse purus ex, semper ac lacinia luctus, volutpat a nibh. Integer facilisis arcu tellus, sit amet tempus massa ultricies eget. Nam varius arcu fringilla, lacinia nunc quis, consectetur ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur a tempor augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut tempor posuere mauris eu ultrices.",
      id: 2
    },
    {
      title: "Hoody",
      img: "https://m.media-amazon.com/images/I/61z8kL3IbmL._AC_SL1000_.jpg",
      price: "$60",
      category: "men's clothing",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a dolor quis metus commodo interdum quis a odio. Aenean congue augue sit amet risus faucibus cursus. In in eros ac mauris eleifend condimentum ut id lorem. Suspendisse purus ex, semper ac lacinia luctus, volutpat a nibh. Integer facilisis arcu tellus, sit amet tempus massa ultricies eget. Nam varius arcu fringilla, lacinia nunc quis, consectetur ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur a tempor augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut tempor posuere mauris eu ultrices.",
      id: 3
    },
    {
      title: "Dress",
      img: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61NDG7jO-3L._AC_UY1000_.jpg",
      price: "$70",
      category: "women's clothing",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a dolor quis metus commodo interdum quis a odio. Aenean congue augue sit amet risus faucibus cursus. In in eros ac mauris eleifend condimentum ut id lorem. Suspendisse purus ex, semper ac lacinia luctus, volutpat a nibh. Integer facilisis arcu tellus, sit amet tempus massa ultricies eget. Nam varius arcu fringilla, lacinia nunc quis, consectetur ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur a tempor augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut tempor posuere mauris eu ultrices.",
      id: 4
    }
  ];
  return (
    <div className="product-page">
      <Container>
        <Row>
          {Array.from({ length: 8 }).map((_, idx) => (
            <Col xs={6} md={4} key={idx}>
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
 
export default Product;
