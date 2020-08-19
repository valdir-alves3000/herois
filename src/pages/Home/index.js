import React from 'react';

import './styles.css';
import paiImg from '../../assets/pai.png';
import manoelImg from '../../assets/manoel.jpg';
import Header from '../../components/Header/index';

 export default function Home () {
  localStorage.setItem('screen', 'home');

   return (
    <div id="page-home">
      <div className="container">
       <Header />
       <div className="content">
      <h1>Feliz dia dos Pais</h1>

      <p>Meu pai, minha referência de vida, o  meu maior exemplo, minha verdadeira inspiração.</p>
      <p>Hoje quero agradecer por tudo que já fez e continua fazendo por min, e lhe dizer que o meu amor por você é maior que o infinito.</p>
      <p>Você é meu pai, meu melhor amigo, meu herói! </p>
      <p><span> Te AMO hoje e sempre! </span></p>
      <p><span>Parabéns pelo seu dia...</span> </p>
<ul>
  <li>
 
      <h1>Jose Benedito</h1>
      
      <img src={paiImg} alt="Jose"/>
      <p>Mais conhecido como Meu pai.</p>
      <p>Pai de dois Homens e uma Mulher, estudou até a 4ºsérie, e mesmo com pouco estudo conseguiu adquirir grande sabedoria.</p>
      <p>Homem que busca sempre manter a disciplina e sua doutrina não pode ser encontrada em nenhuma escola.</p>
      <p>Possui inumeras qualidades, mais a melhor de todas é <b>Ser Meu Pai</b>.</p>
      </li>

      <li>
        <h1>Manoel</h1>
        <img src={manoelImg} alt="Manoel"/>
        
        <p>Mais conhecido como <b>Brasa Viva</b></p>
        <p>Pai 5 vezes, dois homens e 3 mulheres. Pode até parecer frágil, mais é forte como uma rocha.</p>
        <p>Está passando por situação muito desconfortável. Mas mesmo que sua chama não esteja brilhando como antes, acreditamos que isso vai passar.</p>
        <p><b> Mantenha-se forte, pois estamos aguardando seu retorno de braços abertos</b>.</p>
        
      </li>
  </ul>
      </div>

      
      </div>
    </div>
   );
 }

 