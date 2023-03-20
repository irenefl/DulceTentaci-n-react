import React from 'react';
import cookies from '../../../assets/images/cookies.jpg'

function Cookies(props) {
  return (
    <div className='container Products'>
      <img className='cookies' src={cookies}  />
      <h2>{props.name}</h2>
      <p>{props.price}</p>
    </div>
  );
}