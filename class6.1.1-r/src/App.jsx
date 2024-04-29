import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { getCountriesThunk } from "./store/slices/countries.slice";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const url = "https://restcountries.com/v3.1/lang/spanish";
    dispatch(getCountriesThunk(url));
  }, []);

  const countries = useSelector((slices) => slices.countries);
  console.log(countries);
  return (
    <div>
      <h1>Redux</h1>
    </div>
  );
}

export default App;
