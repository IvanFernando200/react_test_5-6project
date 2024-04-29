import { useEffect, useState } from "react";
import useCrud from "../hooks/useCrud";
import ReserveCard from "../components/ReservationsPage/ReserveCard";
import FormReviews from "../components/ReservationsPage/FormReviews";

const ReservationPage = () => {
  const [reserveSelected, setReserveSelected] = useState();
  const [bookings, getBookings] = useCrud();
  useEffect(() => {
    const url = "https://hotels-api.academlo.tech/bookings";
    getBookings(url);
  }, []);

  console.log(bookings);

  return (
    <section>
      <FormReviews reserveSelected={reserveSelected} />
      <h2>Reservation</h2>
      {bookings?.map((reserve) => (
        <ReserveCard
          key={reserve.id}
          reserve={reserve}
          setReserveSelected={setReserveSelected}
        />
      ))}
    </section>
  );
};

export default ReservationPage;
