function ReservationCard ({ id, name, date, time, number }) {
    return (
        <div className='reservation-card'>
            <h3>{name}</h3>
            <p>{date}</p>
            <p>{time}</p>
            <p>Number of guests: {number}</p>
            <button>CANCEL</button>
        </div>
    )
}
  
export default ReservationCard