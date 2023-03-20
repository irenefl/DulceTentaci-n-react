import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import '../components/atoms/card/card.css';
import cake from '../assets/images/cake.jpg';
import cake2 from '../assets/images/cake2.jpg';
import cake3 from '../assets/images/cake3.jpg';

function Cake() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const showCart = () => {
    if (cartItems.length === 0) {
      return <p>No items in cart</p>;
    }
    return (
      <ul>
        {cartItems.map((item) => (
          <li key={item.title}>{item.title}</li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <CardGroup>
        <Card>
          <Card.Img variant="top" src={cake} style={{ height: '300px' }} />
          <Card.Body>
            <Card.Title>Tarta de Chocolate</Card.Title>
            <Card.Text>
              Deliciosa tarta de chocolate con cobertura de chocolate negro 20€
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="primary" onClick={() => addToCart({ title: 'Tarta de Chocolate', price: 20 })}>
              Añadir al carrito
            </Button>
          </Card.Footer>
        </Card>

        <Card>
          <Card.Img variant="top" src={cake2} style={{ height: '300px' }} />
          <Card.Body>
            <Card.Title>Tarta de queso</Card.Title>
            <Card.Text>Tarta clásica de queso 25€</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="primary" onClick={() => addToCart({ title: 'Tarta de queso', price: 25 })}>
              Añadir al carrito
            </Button>
          </Card.Footer>
        </Card>

        <Card>
          <Card.Img variant="top" src={cake3} style={{ height: '300px' }} />
          <Card.Body>
            <Card.Title>Tarta de turrón</Card.Title>
            <Card.Text>Deliciosa tarta de turrón 35€</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="primary" onClick={() => addToCart({ title: 'Tarta de turrón', price: 35 })}>
              Añadir al carrito
            </Button>
          </Card.Footer>
        </Card>
      </CardGroup>
      <hr />
      <h2>Carrito</h2>
      {showCart()}
    </div>
  );
}

export default Cake;
