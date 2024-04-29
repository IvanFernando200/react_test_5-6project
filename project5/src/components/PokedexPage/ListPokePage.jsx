import { useEffect, useState } from "react";
import ItemPoke from "./ItemPoke";
import "./styles/ListPokePage.css";

const ListPokePage = ({
  pokemons,
  startIndex,
  endIndex,
  quantityPages,
  setPage,
  page,
}) => {
  const [blockPage, setBlockPage] = useState(1);
  const [pagesPerBlock, setPagesPerBlock] = useState(5);

  // Logica de bloques
  const initialPageBlock = (blockPage - 1) * pagesPerBlock;
  const endPageBlock = initialPageBlock + pagesPerBlock;

  useEffect(() => {
    setBlockPage(Math.ceil(page / pagesPerBlock));
  }, [page]);

  const arrPages = [];
  for (let i = 1; i <= quantityPages; i++) {
    arrPages.push(i);
  }

  const handlePrev = () => {
    setPage(page - 1);
  };
  const handleNext = () => {
    setPage(page + 1);
  };

  return (
    <div>
      <ul className="selectList gap-page">
        <button disabled={page === 1 && true} onClick={handlePrev}>
          &lt;
        </button>
        {arrPages.slice(initialPageBlock, endPageBlock).map((pageNumber) => (
          <li
            className={`${pageNumber === page && "active-page"}`}
            onClick={() => setPage(pageNumber)}
            key={pageNumber}
          >
            {pageNumber}
          </li>
        ))}
        <button disabled={page === quantityPages && true} onClick={handleNext}>
          &gt;
        </button>
      </ul>
      <div className="selectList">
        {pokemons?.slice(startIndex, endIndex).map((pokemon) => (
          <ItemPoke key={pokemon.url} pokemonItem={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default ListPokePage;
