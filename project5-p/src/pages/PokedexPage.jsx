import { useSelector } from "react-redux";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";
import ListPokemons from "../components/PokedexPage/ListPokemons";
import { useRef } from "react";
import { useState } from "react";
import SelectType from "../components/PokedexPage/SelectType";
import "./styles/PokedexPage.css";

const PokedexPage = () => {
  const [pokeSearch, setPokeSearch] = useState("");
  const [pokeType, setPokeType] = useState("allPokemons");

  const inputSearch = useRef();

  const trainer = useSelector((states) => states.trainer);
  const url = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=0`;

  const [pokemons, getPokemons, getPokeTypes] = useFetch(url);

  useEffect(() => {
    if (pokeType === "allPokemons") {
      getPokemons();
    } else {
      getPokeTypes(pokeType);
    }
  }, [pokeType]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPokeSearch(inputSearch.current.value.trim().toLowerCase());
  };

  const pokemonsFiltered = pokemons?.results.filter((poke) => {
    return poke.name.includes(pokeSearch);
  });

  console.log(pokemons);

  return (
    <div>
      <p>Welcome {trainer}, here you can find your favorite pokemon</p>
      <form onChange={handleSubmit}>
        <input ref={inputSearch} type="text" />
        <button>Search</button>
      </form>
      <SelectType setPokeType={setPokeType} />

      <ListPokemons pokemons={pokemonsFiltered} />
    </div>
  );
};

export default PokedexPage;
