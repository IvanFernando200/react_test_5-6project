import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import "./styles/ItemPoke.css";

const ItemPoke = ({ pokemonItem }) => {
  const navegate = useNavigate();
  const [pokemon, getPokemon] = useFetch();
  useEffect(() => {
    getPokemon(pokemonItem.url);
  }, []);

  const handleClick = () => {
    navegate(`/pokedex/${pokemon.name}`);
  };

  return (
    <article className="card" onClick={handleClick}>
      <header className={`card__header bg-${pokemon?.types[0].type.name}`}>
        <img
          className="card__img"
          src={pokemon?.sprites.other["official-artwork"].front_default}
          alt=""
        />
      </header>
      <hr className="card__hr" />
      <section className="card__principal">
        <h3 className="card__name">{pokemon?.name}</h3>
        <ul className="card__types">
          {pokemon?.types.map((e) => (
            <li className="card__type" key={e.type.url}>
              {e.type.name}
            </li>
          ))}
        </ul>
      </section>
      <section className="">
        <ul className="card__stats">
          {pokemon?.stats.map((e) => (
            <li className="stats__list" key={e.stat.url}>
              <span className="stats__label">{e.stat.name}</span>
              <span className="stats__value">{e.base_stat}</span>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default ItemPoke;
