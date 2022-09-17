import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

function Stock({ stock }) {
  const { favorite, id, name, price, symbol } = stock;

  return (
    <Col md="6" lg="3">
      <Card className="my-2">
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{symbol}</Card.Subtitle>
          <Card.Text>${price}</Card.Text>
          <Button
            variant="primary"
            className={`${favorite ? 'disabled' : ''}`}
            data-id={id}
          >
            Add to favorites!
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Stock;
