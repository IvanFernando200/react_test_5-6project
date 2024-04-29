import { useState } from "react";

interface Props {
  initialValue?: number;
  stepValue?: number;
}

const Counter = ({ initialValue = 0, stepValue = 1 }: Props) => {
  const [contador, setContador] = useState<number>(initialValue);

  const handleClick = (): void => {
    setContador((state): number => state + stepValue);
  };

  return (
    <div>
      <h1>{contador}</h1>
      <button onClick={handleClick}>+{stepValue}</button>
    </div>
  );
};

export default Counter;
