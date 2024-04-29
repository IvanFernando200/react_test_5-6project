import { useDispatch } from "react-redux";
import {
  addOne,
  resetCount,
  setCount,
  subsOne,
} from "../store/slaces/counter.slices";

const CounterBtn = () => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addOne());
  };

  const handleSubtract = () => {
    dispatch(subsOne());
  };

  const handleReset = () => {
    dispatch(resetCount());
  };

  const handleChangeThousand = () => {
    dispatch(setCount(1000));
  };

  return (
    <div>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleSubtract}>-1</button>
      <button onClick={handleReset}>reset</button>
      <button onClick={handleChangeThousand}>Change to 1000</button>
    </div>
  );
};

export default CounterBtn;
