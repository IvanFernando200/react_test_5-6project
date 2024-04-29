import { useRef } from "react";
import { useDispatch } from "react-redux";
import { setTrainer } from "../../store/slices/trainer.slice";
import { useNavigate } from "react-router-dom";

const FormTrainer = () => {
  const dispatch = useDispatch();

  const trainerInput = useRef();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setTrainer(trainerInput.current.value.trim()));
    navigate("/pokedex");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={trainerInput} type="text" />
      <button>Lets Start</button>
    </form>
  );
};

export default FormTrainer;
