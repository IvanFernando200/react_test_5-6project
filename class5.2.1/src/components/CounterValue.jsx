import { useSelector } from "react-redux";

const CounterValue = () => {
  const counter = useSelector((states) => states.counter); // hook que me permite acceder a la store

  return <h1>{counter}</h1>;
};

export default CounterValue;
