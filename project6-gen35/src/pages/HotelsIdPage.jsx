import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";
import { Map, Marker } from "pigeon-maps";
import OtherHotels from "../components/HotelsIdPage/OtherHotels";
import FormReserve from "../components/HotelsIdPage/FormReserve";

const HotelsIdPage = () => {
  const { id } = useParams();
  const url = `https://hotels-api.academlo.tech/hotels/${id}`;
  const [hotel, getHotel] = useFetch(url);

  useEffect(() => {
    getHotel();
  }, [id]);
  // console.log(hotel);

  return (
    <div>
      <h2>{hotel?.name}</h2>
      <h3>RAITING - {hotel?.rating} ⭐</h3>
      <div className="slider">
        <img src={hotel?.images[0].url} alt="" />
        {hotel && (
          <Map
            height={200}
            center={[+hotel?.lat, +hotel?.lon]}
            defaultZoom={10}
          >
            <Marker
              anchor={[+hotel?.lat, +hotel?.lon]}
              color="#90f"
              width={48}
            />
          </Map>
        )}
      </div>
      <section>
        <h3>
          {hotel?.city.name}, {hotel?.city.country}
        </h3>
        <p>
          <i class="bx bx-map"></i>
          <span>{hotel?.address}</span>
        </p>
        <p>{hotel?.description}</p>
      </section>
      {localStorage.getItem("token") ? (
        <FormReserve hotelId={hotel?.id} /> 
      ) : (
        <h4>
          Loggin to make a reservation <Link to="/login">Login</Link>
        </h4>
      )}

      <OtherHotels hotel={hotel} />
    </div>
  );
};

export default HotelsIdPage;
