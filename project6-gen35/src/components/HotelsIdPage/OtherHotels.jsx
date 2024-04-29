import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import HotelCard from "../HomePage/HotelCard";

const OtherHotels = ({ hotel }) => {
  const url = `https://hotels-api.academlo.tech/hotels?cityId=${hotel?.cityId}`;
  const [hotelsInCity, getHotelsInCity] = useFetch(url);

  useEffect(() => {
    if (hotel) {
      getHotelsInCity();
    }
  }, [hotel]);

  console.log(hotel);
  console.log(hotelsInCity);
  return (
    <div>
      Other hotels in <span>{hotel?.city.name}</span>
      <div>
        {hotelsInCity
          ?.filter((e) => e.id !== hotel.id)
          .map((hotelInfo) => (
            <HotelCard key={hotelInfo.id} hotel={hotelInfo} />
          ))}
      </div>
    </div>
  );
};

export default OtherHotels;
