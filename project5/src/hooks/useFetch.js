import axios from "axios";
import { useState } from "react";

const useFetch = () => {
  const [response, setResponse] = useState();
  const getApi = (url) => {
    axios
      .get(url)
      .then((res) => setResponse(res.data))
      .catch((err) => console.log(err));
  };

  const getApiType = (urlType) => {
    axios
      .get(urlType)
      .then((res) => {
        const obj = {
          results: res.data.pokemon.map((poke) => poke.pokemon),
        };
        setResponse(obj);
      })
      .catch((err) => console.log(err));
  };

  return [response, getApi, getApiType];
};

export default useFetch;
