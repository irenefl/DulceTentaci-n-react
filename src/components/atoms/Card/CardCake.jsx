import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import cake from '../../../assets/images/cake.jpg'


function CardCake() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={cake} className="card-image" />
      <Card.Body>
        <Card.Title>Tartas</Card.Title>
        <Card.Text>
         Distintos tipos de tartas
        </Card.Text>
        <Button variant="primary">Acceder</Button>
      </Card.Body>
    </Card>
  );
}

export default CardCake;

