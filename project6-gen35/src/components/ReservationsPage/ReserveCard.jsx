const ReserveCard = ({ reserve, setReserveSelected }) => {
  const checkIn = new Date(reserve.checkIn);
  const checkOut = new Date(reserve.checkOut);

  const reservationDays = (checkOut - checkIn) / (1000 * 60 * 60 * 24);

  const handleReview = () => {
    const obj = {
      ...reserve,
      reservationDays,
      subtotal: reserve.hotel.price * reservationDays,
    };
    setReserveSelected(obj);
  };
  return (
    <article>
      <img src={reserve.hotel.images[0].url} alt="" />
      <section>
        <h3>{reserve.hotel.name}</h3>
        <div>
          {reserve.hotel.city.name}, {reserve.hotel.city.country}
        </div>
        <div onClick={handleReview}>Rate and comment this visit...</div>
      </section>
      <section>
        <ul>
          <li>
            <span>Reservation Days </span>
            <span>{reservationDays}</span>
          </li>
          <li>
            <span>subtotal Price </span>
            <span>$ {reservationDays * reserve.hotel.price}</span>
          </li>
        </ul>
      </section>
      <footer>
        <button>🗑</button>
      </footer>
    </article>
  );
};

export default ReserveCard;
