import './App.css';
import React from 'react';
import { useState, useEffect } from 'react'; 
import Reservations from '../Reservations/Reservations';
import Form from '../Form/Form'

function App() {
  const [reservations, setReservations] = useState([])

  function getReservations() {
    fetch('http://localhost:3001/api/v1/reservations')
    .then(response => response.json())
    .then(data => setReservations([...reservations, ...data]))
    .catch(error => console.log(error.message))
  }

  useEffect(() => {
    getReservations()
  }, [])

  function addReservation(newReservation) {    
    fetch('http://localhost:3001/api/v1/reservations', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newReservation), 
  })
    .then(response => response.json())
    .then(data => setReservations([...reservations, data]))
    .catch(error => console.log(error.message)) 
  }

  return (
    <div className="App">
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <div className='resy-container'>
        <Form addReservation={addReservation}/>
        <Reservations reservations={reservations}/>
      </div>
    </div>
  );
}

export default App; 