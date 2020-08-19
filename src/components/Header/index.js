import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './styles.css';
import logoImg from '../../assets/pisca_pai.png';

export default function Header() {
  const history = useHistory();
  const [pageActive, setPageActive] = useState('home');

  function handlePage(event) {   
    
    if(event === 'home') {
      setPageActive(prev => 'home');

      history.push('/');
    } else {
      setPageActive(prev => 'herois');
      history.push('/herois');
    }

  }
  
  return (
    <header className="header">
      <img src={logoImg} alt="" width="50px" />
      <ul>
        <li>
          <p id="home" className={pageActive === 'home' ? 'active' : ''} onClick={() => handlePage('home')}>Home</p>
        </li>
        <li>
          <p id="herois"  className={pageActive === 'herois' ? 'active' : ''} onClick={() => handlePage('herois')}>Coleção de Heróis</p>
        </li>
      </ul>



    </header>
  );
}
