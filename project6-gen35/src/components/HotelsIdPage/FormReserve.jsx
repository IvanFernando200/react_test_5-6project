import { useForm } from "react-hook-form";
import useCrud from "../../hooks/useCrud";

const FormReserve = ({ hotelId }) => {
  const { register, handleSubmit, reset } = useForm();

  const [, , createBooking] = useCrud();
  const submit = (data) => {
    console.log(data);
    const url = "https://hotels-api.academlo.tech/bookings";
    data.hotelId = Number(hotelId);
    createBooking(url, data);
  };
  return (
    <section>
      <h3>Wanna reserve this hotel</h3>
      <form onSubmit={handleSubmit(submit)}>
        <label>
          <span>Check-in</span>
          <input {...register("checkIn")} type="date" />
        </label>
        <label>
          <span>Check-out</span>
          <input {...register("checkOut")} type="date" />
        </label>
        <button>Submit</button>
      </form>
    </section>
  );
};

export default FormReserve;
