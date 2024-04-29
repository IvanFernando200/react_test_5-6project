import { useSelector } from "react-redux";
import "./App.css";

function App() {
  const countries = useSelector((slices) => slices.countries);

  console.log(countries);
  return (
    <div>
      <h1>Redux</h1>
    </div>
  );
}

export default App;
