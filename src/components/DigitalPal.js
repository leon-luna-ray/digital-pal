import React, { useEffect, useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import DarkModeBtn from './DarkModeBtn';

const DigitalPal = () => {
  const [age, setAge] = useState(0);
  const [message, setMessage] = useState('');
  const [isBored, setIsBored] = useState(true);
  const [isHungry, setIsHungry] = useState(false);
  const [isOutside, setIsOutside] = useState(false);
  const [isSleepy, setIsSleepy] = useState(false);
  const [houseCondition, setHouseCondition] = useState(100);
  // Each method will change the state and display a message for 3 seconds
  const feed = () => {
    if (isHungry) {
      setMessage('Mmmmm! That was yummy!');
      setIsHungry(false);
      setTimeout(() => {
        setMessage('');
      }, 2000);
    } else {
      setMessage("No thanks! I'm full");
      setIsHungry(true);
      setTimeout(() => {
        setMessage('');
      }, 2000);
    }
  };

  console.log(isHungry);
  return (
    <Container>
      <nav className='d-flex justify-content-end'>
        <DarkModeBtn />
      </nav>
      <main className='text-center'>
        <h1>Digital Pal</h1>
        <h1 id='digital-pal'>👾</h1>
        <Button onClick={feed}>Feed</Button>
        <br />
        <br />
        <h2>{message}</h2>
      </main>
    </Container>
  );
};

export default DigitalPal;
