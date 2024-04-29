import { useDispatch } from "react-redux";
import { setTrainer } from "../../store/slices/trainer.slice";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/HomeForm.css";

const HomeForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const inputTrainer = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(setTrainer(inputTrainer.current.value.trim()));

    navigate("/pokedex");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="form__input"
        ref={inputTrainer}
        type="text"
        placeholder="Your name"
      />
      <button className="form__btn">Comenzar</button>
    </form>
  );
};

export default HomeForm;
