import { useRef } from "react";
import { addProduct } from "../store/slaces/products.slices";
import { useDispatch } from "react-redux";

const FormProducts = () => {
  const dispatch = useDispatch();
  const inputProduct = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addProduct({
        id: Date.now(),
        name: inputProduct.current.value.trim(),
      })
    );
    inputProduct.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputProduct} type="text" />
      <button>Add</button>
    </form>
  );
};

export default FormProducts;
