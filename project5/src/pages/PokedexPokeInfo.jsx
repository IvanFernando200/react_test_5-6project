import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useEffect, useRef } from "react";
import "./styles/PokedexPokeInfo.css";

const PokedexPokeInfo = () => {
  const { name } = useParams();
  const [pokemonInfo, getPokemonInfo] = useFetch();
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
  useEffect(() => {
    getPokemonInfo(url);
  }, [name]);

  console.log(pokemonInfo);
  const inputPlay = useRef();
  const handlePlay = () => {
    inputPlay.current.play();
  };
  console.log(pokemonInfo);
  return (
    <div className="centered">
      <article className="info">
        <header
          className={`info__header bg-${pokemonInfo?.types[0].type.name}`}
        >
          <img
            className="info__img"
            src={pokemonInfo?.sprites.other["official-artwork"].front_default}
            alt=""
          />
        </header>
        <div className="info-body">
          <section className="info__principal">
            <div className="principal__id">#{pokemonInfo?.id}</div>
            <h2 className="principal__name">{pokemonInfo?.name}</h2>
            <audio ref={inputPlay} src={pokemonInfo?.cries.legacy}></audio>
            <button className="principal__btn" onClick={handlePlay}>
              {"🔊"}
            </button>
            <ul>
              <li>
                <span>Weight</span>
                <span>{pokemonInfo?.weight}</span>
              </li>
              <li>
                <span>Height</span>
                <span>{pokemonInfo?.height}</span>
              </li>
            </ul>
          </section>
          <section className="info__typeAbilities-container">
            <div className="info__type info-used">
              <h3>Type</h3>
              <ul>
                {pokemonInfo?.types.map((e) => (
                  <li key={e.type.url}>{e.type.name}</li>
                ))}
              </ul>
            </div>
            <div className="info__abilities info-used">
              <h3>Abilities</h3>
              <ul>
                {pokemonInfo?.abilities.map((e) => (
                  <li key={e.ability.url}>{e.ability.name}</li>
                ))}
              </ul>
            </div>
          </section>
          <section className="info__stats">
            <h3 className="stats__h3">Stats</h3>
            <ul className="stats__ul">
              {pokemonInfo?.stats.map((e) => (
                <li className="stats__li" key={e.stat.url}>
                  <div className="stat__calify">
                    <span>{e.stat.name}:</span>
                    <span>{e.base_stat}/150</span>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      backgroundColor: "#eee",
                      height: "1em",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "#ec0",
                        width: `${(e.base_stat / 150) * 100}%`,
                        height: "100%",
                      }}
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
          </section>
          <section className="info__movements">
            <h2>Movements</h2>
            <ul>
              {pokemonInfo?.moves
                .map((e) => <li key={e.move.url}>{e.move.name}</li>)
                .slice(1, 25)}
            </ul>
          </section>
        </div>
      </article>
    </div>
  );
};

export default PokedexPokeInfo;
