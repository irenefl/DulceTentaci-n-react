import React from 'react';
import bread from '../../../assets/images/bread.jpg'

function Bread(props) {
  return (
    <div className='container Products'>
      <img className='bread' src={bread}  />
      <h2>{props.name}</h2>
      <p>{props.price}</p>
    </div>
  );
}
