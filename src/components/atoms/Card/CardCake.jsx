import React from 'react';
import cake from '../../../assets/images/cake.jpg'


function Cakes (props) {
  return (
    <div className='container Products'>
      <img className='cake' src={cake}  />
      <h2>{props.name}</h2>
      <p>{props.price}</p>
    </div>
  );
}

export default Cakes;
