import { deleteProduct } from "../store/slaces/products.slices";
import { useDispatch } from "react-redux";

const ProducItem = ({ name, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteProduct(id));
  };
  return (
    <li>
      <span>{name} </span>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default ProducItem;
