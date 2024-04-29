import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const FormPage = ({ setIsLogged }) => {
  const inputValue = useRef();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const condition = inputValue.current.value.length > 3 ? true : false;
    setIsLogged(condition);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputValue} type="text" />
      <button>Login</button>
    </form>
  );
};

export default FormPage;
