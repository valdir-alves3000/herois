import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import './styles.css';
import logoImg from '../../assets/pisca_pai.png';

export default function Header() {
  const history = useHistory();
  const [pageActive, setPageActive] = useState('home');

  function handlePage(event) {   
    const home = document.querySelector('#home');
    const herois = document.querySelector('#herois');

    if(event == 'home') {
      home.setAttribute('class', 'active');
      herois.removeAttribute('class', 'active');

      history.push('/');
    } else {
      herois.setAttribute('class', 'active');
      home.removeAttribute('class', 'active');

      history.push('/herois');
    }

  }
  function activeScreen(event) {
    document.querySelector(`#${event}`).setAttribute('class', 'active');
  }
  return (
    <header className="header">
      <img src={logoImg} alt="" width="50px" />
      <ul>
        <li>
          <p id="home" className="active" onClick={() => handlePage('home')}>Home</p>
        </li>
        <li>
          <p id="herois" onClick={() => handlePage('herois')}>Coleção de Heróis</p>
        </li>
      </ul>



    </header>
  );
}