import "./App.css";
import Counter from "./components/Counter";

function App() {
  return (
    <div>
      <h1>React + Typescript</h1>
      <Counter />
      <Counter initialValue={1000000} stepValue={10000} />
    </div>
  );
}

export default App;
