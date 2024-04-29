import { useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [response, setResponse] = useState();

  const getApi = () => {
    axios
      .get(url)
      .then((res) => setResponse(res.data))
      .catch((err) => console.log(err));
  };

  const getApiTypes = (urlTypes) => {
    axios
      .get(urlTypes)
      .then((res) => {
        const obj = {
          results: res.data.pokemon.map((e) => e.pokemon),
        };
        setResponse(obj);
      })
      .catch((err) => console.log(err));
  };
  return [response, getApi, getApiTypes];
};

export default useFetch;
