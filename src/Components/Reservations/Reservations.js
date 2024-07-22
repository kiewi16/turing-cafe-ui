import ReservationCard from "../ReservationCard/ReservationCard"
import '../Reservations/Reservations.css'

function Reservations({ reservations }) {
    const reservationInfoCards = reservations.map(reservation => {
        return (
            <ReservationCard
            id={reservation.id}
            key={reservation.id}
            name={reservation.name}
            date={reservation.date}
            time={reservation.time}
            number={reservation.number}
            />
        )
    })
    
    return (
      <div className="reservations-container">
        {reservationInfoCards}
      </div>         
    )
}

export default Reservations