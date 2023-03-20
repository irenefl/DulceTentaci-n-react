import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import { FaTrash } from 'react-icons/fa';
import '../atoms/card/card.css';
import cake from '../../assets/images/cake.jpg';
import cake2 from '../../assets/images/cake2.jpg';
import cake3 from '../../assets/images/cake3.jpg';

function Basket() {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeItemFromCart = (itemIndex) => {
    setCartItems((prevItems) =>
      prevItems.filter((_, index) => index !== itemIndex)
    );
  };

  const totalPrice = cartItems.reduce(
    (total, currentItem) => total + currentItem.price,
    0
  );

  return (
    <div>
      <CardGroup>
        <Card>
          <Card.Img variant="top" src={cake} className='card-image'/>
          <Card.Body>
            <Card.Title>Tarta de Chocolate</Card.Title>
            <Card.Text>
              Deliciosa tarta de chocolate con cobertura de chocolate negro 20€
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button
              variant="primary"
              onClick={() =>
                addItemToCart({ title: 'Tarta de Chocolate', price: 20 })
              }
            >
              Añadir al carrito
            </Button>
          </Card.Footer>
        </Card>

        <Card>
          <Card.Img variant="top" src={cake2} className='card-image'/>
          <Card.Body>
            <Card.Title>Tarta de queso</Card.Title>
            <Card.Text>Tarta clásica de queso 25€</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button
              variant="primary"
              onClick={() => addItemToCart({ title: 'Tarta de Queso', price: 25 })}
            >
              Añadir al carrito
            </Button>
          </Card.Footer>
        </Card>

        <Card>
          <Card.Img variant="top" src={cake3} className='card-image' />
          <Card.Body>
            <Card.Title>Tarta de turrón</Card.Title>
            <Card.Text>Deliciosa tarta de turrón 35€</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button
              variant="primary"
              onClick={() =>
                addItemToCart({ title: 'Tarta de Turrón', price: 35 })
              }
            >
              Añadir al carrito
            </Button>
          </Card.Footer>
        </Card>
      </CardGroup>

      <div>
        <h2>Carrito de compras</h2>
        {cartItems.length === 0 ? (
          <p>No hay productos en el carrito</p>
        ) : (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.title} - {item.price}€{' '}
                <Button variant="danger" onClick={() => removeItemFromCart(index)}>
                  <FaTrash />
                </Button>
              </li>
            ))}
          </ul>
        )}
...
        <p>Total: {totalPrice}€</p>

      </div> 
    </div>
  );
}

export default Basket;
