import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import "./styles/PokeCard.css";

const PokeCard = ({ pokeInfo }) => {
  const [pokemon, getPokemon] = useFetch(pokeInfo.url);
  useEffect(() => {
    getPokemon();
  }, []);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/pokedex/${pokeInfo.name}`);
  };
  return (
    <article className="card" onClick={handleClick}>
      <header className={`card__header color-${pokemon?.types[0].type.name}`}>
        <img
          className="card__img"
          src={pokemon?.sprites.other["official-artwork"].front_shiny}
          alt=""
          width={200}
        />
      </header>
      <section className="card__principal">
        <h3 className="card__name">{pokemon?.name}</h3>
        <ul className="card__types">
          {pokemon?.types.map((typeInfo) => (
            <li className="card__type" key={typeInfo.type.url}>
              {typeInfo.type.name}
            </li>
          ))}
        </ul>
      </section>
      <hr className="card__hr" />
      <section className="card__stats">
        <ul className="card__list">
          {pokemon?.stats.map((statInfo) => (
            <li className="card__stat" key={statInfo.stat.url}>
              <span className="card__stat__label">{statInfo.stat.name}</span>
              <span className="card__stat__value">{statInfo.base_stat}</span>
            </li>
          ))}
        </ul>
      </section>
      <footer></footer>
    </article>
  );
};

export default PokeCard;
