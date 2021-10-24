import React, { useEffect, useState } from 'react';
import { Container, Button, Col, Row } from 'react-bootstrap';
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

  const reset = () => {
    setTimeout(() => {
      setIcon('');
      setDigitalPal('👾');
      setMessage('');
    }, 2000);
  };

  const feed = () => {
    if (isHungry) {
      setIcon('🍒');
      setMessage('Mmmmm! That was yummy!');
      setIsHungry(false);
      reset();
    } else {
      setIcon('🚫');
      setDigitalPal('');
      setMessage("No thanks! I'm full");
      setIsHungry(true);
      reset();
    }
  };
  const play = () => {
    if (isBored) {
      setIcon('🎾');
      setMessage("yay! Let's play!");
      setIsBored(false);
      setIsHungry(true);
      reset();
    } else {
      setIcon('🚫');
      setDigitalPal('');
      setMessage("I don't wanna!");
      setIsBored(true);
      reset();
    }
  };

  const sleep = () => {
    if (isSleepy) {
      setIcon('🌙');
      setMessage('Nite nite ...zzzzz');
      setIsSleepy(false);
      setIsHungry(true);
      reset();
    } else {
      setIcon('🚫');
      setDigitalPal('');
      setMessage("I'm not tired!");
      reset();
    }
  };

  const goInside = () => {
    setIcon('🏡');
    setMessage("Okay I'm tired...");
    setIsSleepy(true);
    setIsOutside(false);
    reset();
  };

  const goOutside = () => {
    setIcon('☀️');
    setMessage('Yay! I wanna play outside!');
    setIsOutside(true);
    reset();
  };

  const commands = [
    { name: 'feed', color: 'btn-danger', function: feed },
    { name: 'play', color: 'btn-warning', function: play },
    { name: 'sleep', color: 'btn-primary', function: sleep },
    {
      name: isOutside ? 'go inside' : 'go outside',
      color: 'btn-success',
      function: isOutside ? goInside : goOutside,
    },
  ];

  const commandBtns = commands.map((command, index) => {
    return (
      <Col key={index} md={6} lg={3}>
        <Button
          key={index}
          className={`command-btn text-uppercase ${command.color}`}
          onClick={command.function}
        >
          {command.name}
        </Button>
      </Col>
    );
  });

  return (
    <Container>
      <Row>
        <nav className='d-flex justify-content-end'>
          <DarkModeBtn />
        </nav>
      </Row>
      <main className='text-center'>
        <h1 className='digital-pal-title'>Digital Pal</h1>
        <Row className='controls'>{commandBtns}</Row>
        <span id='action-icon' className='icon'>
          {icon}
        </span>
        <span id='digital-pal' className='icon'>
          {digitalPal}
        </span>
        <br />
        <h2>{message}</h2>
      </main>
    </Container>
  );
};

export default DigitalPal;
