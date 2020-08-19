import React, { useState } from 'react';

import Header from '../../components/Header';
import { FiChevronsRight, FiChevronsLeft } from 'react-icons/fi';


import './styles.css';

import foto1 from '../../assets/foto1.jpg';
import foto2 from '../../assets/foto2.jpg';
import foto3 from '../../assets/foto3.jpg';
import foto4 from '../../assets/foto4.jpg';
import foto5 from '../../assets/foto5.jpg';
import foto6 from '../../assets/foto6.jpg';
import foto7 from '../../assets/foto7.jpg';
import foto8 from '../../assets/foto8.jpg';
import foto9 from '../../assets/foto9.jpg';
import foto10 from '../../assets/foto10.jpg';
import foto11 from '../../assets/foto11.jpg';
import foto12 from '../../assets/foto12.jpg';
import foto13 from '../../assets/foto13.jpg';
import foto14 from '../../assets/foto14.jpg';
import foto15 from '../../assets/foto15.jpg';
import foto16 from '../../assets/foto16.jpg';
import foto17 from '../../assets/foto17.jpg';
import foto18 from '../../assets/foto18.jpg';
import foto19 from '../../assets/foto19.jpg';
import foto20 from '../../assets/foto20.jpg';
import foto21 from '../../assets/foto21.jpg';
import foto22 from '../../assets/foto22.jpg';
import foto23 from '../../assets/foto23.jpg';
import foto24 from '../../assets/foto24.jpg';
import foto25 from '../../assets/foto25.jpg';
import foto27 from '../../assets/foto27.jpg';
import foto26 from '../../assets/foto26.jpeg';

function Herois() {
  localStorage.setItem('screen', 'herois');
  const [img, setImg] = useState(1);
  const count = [
    foto1,
    foto2,
    foto3,
    foto4,
    foto5,
    foto6,
    foto7,
    foto8,
    foto9,
    foto10,
    foto11,
    foto12,
    foto13,
    foto14,
    foto15,
    foto16,
    foto17,
    foto18,
    foto19,
    foto20,
    foto21,
    foto22,
    foto23,
    foto24,
    foto25,
    foto26,
    foto27
  ];

  function handleSlideShow(e) {
    
    if (e == 'rigth') {
      setImg((prevState) => prevState + 1);
      if (img >= 27) {
       setImg( 0 );
      }
    } else {
      setImg((prevState) => prevState - 1);

      if (img <= 0) {
        setImg( 25 );
      }
    }

    document.getElementById('slide-show').src = count[img];
    //setTimeout(handleSlideShow(), 3000);

  }

  return (
    <div id="page-herois">
      <div className="container">
        <Header />

        <div className="section">

          <div id="slide" >
            <FiChevronsLeft
              onClick={() => handleSlideShow('left')}
              size={20} color="#333" />

            <img id="slide-show" src={foto1} alt="" />

            <FiChevronsRight
              onClick={() => handleSlideShow('rigth')}
              size={25} color="#333" />

          </div>
          <ul>
            <li><img src={foto1} /></li>
            <li><img src={foto2} /></li>
            <li><img src={foto3} /></li>
            <li><img src={foto4} /></li>
            <li><img src={foto4} /></li>
            <li><img src={foto6} /></li>
            <li><img src={foto7} /></li>
            <li><img src={foto8} /></li>
            <li><img src={foto9} /></li>
            <li><img src={foto10} /></li>
            <li><img src={foto11} /></li>
            <li><img src={foto12} /></li>
            <li><img src={foto13} /></li>
            <li><img src={foto14} /></li>
            <li><img src={foto15} /></li>
            <li><img src={foto16} /></li>
            <li><img src={foto17} /></li>
            <li><img src={foto18} /></li>
            <li><img src={foto19} /></li>
            <li><img src={foto20} /></li>
            <li><img src={foto21} /></li>
            <li><img src={foto22} /></li>
            <li><img src={foto23} /></li>
            <li><img src={foto24} /></li>
            <li><img src={foto25} /></li>
            <li><img src={foto26} /></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Herois;