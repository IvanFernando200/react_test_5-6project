import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import "./styles/SelecterType.css";

const SelecterType = ({ setPokeTypeSelect }) => {
  const [types, getTypes] = useFetch();
  useEffect(() => {
    const url = "https://pokeapi.co/api/v2/type";
    getTypes(url);
  }, []);
  const handleChange = (e) => {
    setPokeTypeSelect(e.target.value);
  };
  return (
    <select className="selecterType" onChange={handleChange}>
      <option value="allPokemons">All types Selected</option>
      {types?.results.map((type) => (
        <option key={type.url} value={type.url}>
          {type.name}
        </option>
      ))}
    </select>
  );
};

export default SelecterType;
