import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import bread from '../../../assets/images/bread.jpg'


function CardBread() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={bread} className="card-image"/>
      <Card.Body>
        <Card.Title>Pan</Card.Title>
        <Card.Text>
        Diferentes tipos de pan
        </Card.Text>
        <Button variant="primary">Aceder</Button>
      </Card.Body>
    </Card>
  );
}

export default CardBread;

