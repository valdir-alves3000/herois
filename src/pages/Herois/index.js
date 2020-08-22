import React, { useEffect, useState } from 'react';

import Header from '../../components/Header';
//import { FiChevronsRight, FiChevronsLeft } from 'react-icons/fi';

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
import foto26 from '../../assets/foto26.jpg';
import foto27 from '../../assets/foto27.jpeg';

function Herois() {
  localStorage.setItem('screen', 'herois');

  const [foto, setFoto] = useState(foto1);
  const [count, setCount] = useState(0);
  const img = [    
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
    foto27,
    foto1,
  ];

  useEffect(() => {    
    setTimeout(() => {
      if(count >= img.length - 1) {
        setCount(0);
      } else {
        setCount(count + 1);     
      }
  
      setFoto(img[count]);
    }, 2000);
   
  }, [foto, count, img]); 

return (
  
    <div className="container">
      <Header />

      <div className="section">

        <div id="slide" className="slide" >
          <div className="slide-items">
            <img src={foto} alt="" width="300px" />
           
          </div>

        </div>
       
          <img src={foto1} alt="" />
          <img src={foto2} alt="" />
          <img src={foto3} alt="" />
          <img src={foto4} alt="" />
          <img src={foto5} alt="" />
          <img src={foto6} alt="" />
          <img src={foto7} alt="" />
          <img src={foto8} alt="" />
          <img src={foto9} alt="" />
          <img src={foto10} alt="" />
          <img src={foto11} alt="" />
          <img src={foto12} alt="" />
          <img src={foto13} alt="" />
          <img src={foto14} alt="" />
          <img src={foto15} alt="" />
          <img src={foto16} alt="" />
          <img src={foto17} alt="" />
          <img src={foto18} alt="" />
          <img src={foto19} alt="" />
          <img src={foto20} alt="" />
          <img src={foto21} alt="" />
          <img src={foto22} alt="" />
          <img src={foto23} alt="" />
          <img src={foto24} alt="" />
          <img src={foto25} alt="" />
          <img src={foto26} alt="" />
          <img src={foto27} alt="" />        
      
    </div>
  </div>
);
}

export default Herois;