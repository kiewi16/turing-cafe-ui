import { useState } from 'react'

function Form( {addReservation} ) {
    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [number, setNumber] = useState('')
  
    function handleSubmit(event) {
        event.preventDefault()
        const newReservation = {
            id: Date.now(),
            name,
            date,
            time,
            number,
        }
        addReservation(newReservation)       
        clearForm()
         
    }

    function clearForm() {
        setName('')
        setDate('')
        setTime('')
        setNumber('')
    }

    return (
    <form onSubmit={handleSubmit}>
        <input
            id="name"
            type="text"
            placeholder="NAME"
            value={name}
            onChange={(event) => setName(event.target.value)}
        />
        <input
            id="date"
            type="text"
            placeholder="MM/DD"
            value={date}
            onChange={(event) => setDate(event.target.value)}
        />
        <input
            id="time"
            type="text"
            placeholder="TIME"
            value={time}
            onChange={(event) => setTime(event.target.value)}
        />
        <input
            id="number"
            type="text"
            placeholder="NUMBER OF GUESTS"
            value={number}
            onChange={(event) => setNumber(event.target.value)}
        />
        <button type="submit">MAKE RESERVATION</button>
    </form>
    )
}

export default Form