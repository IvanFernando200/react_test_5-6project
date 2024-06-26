import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";

const SelectType = ({ setPokeType }) => {
  const url = "https://pokeapi.co/api/v2/type";
  const [types, getTypes] = useFetch(url);

  useEffect(() => {
    getTypes();
  }, []);

  const handleSelect = (e) => {
    setPokeType(e.target.value);
  };

  return (
    <select onChange={handleSelect}>
      <option value="allPokemons">All pokemons</option>
      {types?.results.map((type) => (
        <option key={type.url} value={type.url}>
          {type.name}
        </option>
      ))}
    </select>
  );
};

export default SelectType;
