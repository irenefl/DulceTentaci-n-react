import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import cookies from '../../../assets/images/cookies.jpg'



function CardCake() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={cookies} className="card-image" />
      <Card.Body>
        <Card.Title>Pastas</Card.Title>
        <Card.Text>
         Pastas y mantecados
        </Card.Text>
        <Button variant="primary">Acceder</Button>
      </Card.Body>
    </Card>
  );
}

export default CardCake;