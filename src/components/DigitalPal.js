import React, { useEffect, useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import DarkModeBtn from './DarkModeBtn';

const DigitalPal = () => {
  const [age, setAge] = useState(0);
  const [icon, setIcon] = useState('');
  const [digitalPal, setDigitalPal] = useState('👾');
  const [message, setMessage] = useState('');
  const [isBored, setIsBored] = useState(true);
  const [isHungry, setIsHungry] = useState(false);
  const [isOutside, setIsOutside] = useState(false);
  const [isSleepy, setIsSleepy] = useState(false);
  const [houseCondition, setHouseCondition] = useState(100);
  // Each method will change the state and display a message for 3 seconds
  const feed = () => {
    if (isHungry) {
      setIcon('🍒');
      setMessage('Mmmmm! That was yummy!');
      setIsHungry(false);
      setTimeout(() => {
        setIcon('');
        setMessage('');
      }, 2000);
    } else {
      setIcon('🚫');
      setMessage("No thanks! I'm full");
      setIsHungry(true);
      setTimeout(() => {
        setIcon('');

        setMessage('');
      }, 2000);
    }
  };
  const play = () => {
    if (isBored) {
      setMessage("yay! Let's play!");
      setIsBored(false);
      setIsHungry(true);
      setTimeout(() => {
        setMessage('');
      }, 2000);
    } else {
      setMessage("I don't wanna!");
      setIsBored(true);
      setTimeout(() => {
        setMessage('');
      }, 2000);
    }
  };

  console.log(isBored);
  return (
    <Container>
      <nav className='d-flex justify-content-end'>
        <DarkModeBtn />
      </nav>
      <main className='text-center'>
        <h1>Digital Pal</h1>
        <div className='controls'>
          <Button onClick={feed}>Feed</Button>
        </div>
        <span id='action-icon' className='icon'>
          {icon}
        </span>
        <span id='digital-pal' className='icon'>
          {digitalPal}
        </span>
        <br />
        <h2>{message}</h2>
        <br />
        <br />
        <br />
      </main>
    </Container>
  );
};

export default DigitalPal;
