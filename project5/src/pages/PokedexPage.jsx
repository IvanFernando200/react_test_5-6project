import { useEffect, useRef, useState } from "react";
import useFetch from "../hooks/useFetch";
import ListPokePage from "../components/PokedexPage/ListPokePage";
import { useSelector } from "react-redux";
import SelecterType from "../components/PokedexPage/SelecterType";
import "./styles/PokedexPage.css";

const PokedexPage = () => {
  const inputSearch = useRef();
  const [pokeSearch, setPokeSearch] = useState("");
  const [pokeTypeSelect, setPokeTypeSelect] = useState("allPokemons");

  // for the pagination
  const [page, setPage] = useState(1);
  const [pokePerPage, setPokePerPage] = useState(10);

  const trainer = useSelector((slices) => slices.trainer);
  const url = `https://pokeapi.co/api/v2/pokemon?limit=100&offset=0`;
  const [pokemons, getPokemons, getPokeType] = useFetch();

  useEffect(() => {
    if (pokeTypeSelect === "allPokemons") {
      getPokemons(url);
    } else {
      getPokeType(pokeTypeSelect);
    }
    setPage(1);
  }, [pokeTypeSelect]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPokeSearch(inputSearch.current.value.trim());
  };

  const filteredPokemons = pokemons?.results.filter((poke) =>
    poke.name.includes(pokeSearch)
  );

  // Logica paginacion
  const startIndex = (page - 1) * pokePerPage;
  const endIndex = page * pokePerPage;
  const quantityPokes = filteredPokemons ? filteredPokemons.length : 0;
  const quantityPages = Math.ceil(quantityPokes / pokePerPage);

  return (
    <div className="page">
      <h2 className="page__h2">
        <span
          style={{
            color: "#c00",
          }}
        >
          Welcome {trainer}
        </span>
        , here you can find your favorite pokemon
      </h2>
      <form className="page__form" onSubmit={handleSubmit}>
        <input className="form__input" ref={inputSearch} type="text" />
        <button
          className="form__btn"
          style={{
            backgroundColor: "#00a",
          }}
        >
          Search
        </button>
      </form>
      <SelecterType setPokeTypeSelect={setPokeTypeSelect} />
      <ListPokePage
        pokemons={filteredPokemons}
        startIndex={startIndex}
        endIndex={endIndex}
        quantityPages={quantityPages}
        setPage={setPage}
        page={page}
      />
    </div>
  );
};

export default PokedexPage;
