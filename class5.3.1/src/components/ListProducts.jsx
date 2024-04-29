import { useSelector } from "react-redux";
import ProducItem from "./ProducItem";

const ListProducts = () => {
  const products = useSelector((states) => states.products);

  console.log(products);

  return (
    <ul>
      {products.map((prod) => (
        <ProducItem key={prod.id} name={prod.name} id={prod.id} />
      ))}
    </ul>
  );
};

export default ListProducts;
