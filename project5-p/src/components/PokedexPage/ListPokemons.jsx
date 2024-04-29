import PokeCard from "./PokeCard";
import "./styles/ListPokemon.css";

const ListPokemons = ({ pokemons, pokeType }) => {
  return (
    <div className="list__container">
      {pokemons?.map((pokeInfo) => (
        <PokeCard key={pokeInfo.url} pokeInfo={pokeInfo} />
      ))}
    </div>
  );
};

export default ListPokemons;
