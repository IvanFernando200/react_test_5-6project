import { useParams } from "react-router-dom";

const CountryPage = () => {
  const { name } = useParams();

  return (
    <div>
      <h2>Country Page </h2>
      {name}
    </div>
  );
};

export default CountryPage;
