import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./func/counter.js";
import { clonacion } from "./func/01clonacion-obj.js";

import heroesjson from "./data/heroes.json";
import { heroes } from "./data/heroes.js";
// import { heroes } from "./data/heroes";

{
  const person = {
    name: "Ivan",
    age: "22",
    gender: "male",
  };
  // Para clonacion de objetos tambien utilizamo el spered operator (...)
  console.log(clonacion(person));

  // Tarea:
  // 1. Transformen a una funcion de flecha
  // 2. Tiene que retornar un objeto iplicito
  // 3. Pruebas
  const getUsurioActivo = (name) => ({
    uid: "ABC567",
    username: name,
  });

  const usuarioActivo = getUsurioActivo("Fernando");
  console.log(usuarioActivo);
}

{
  console.log("// Destructuring:");
  console.log("// Object.-");
  // Object Destructuring:
  // Asignacion destructurante

  const persona = {
    nombre: "Tony",
    edad: 45,
    clave: "Ironman",
    // rango: "Heroe",
  };

  // const { edad, nombre: name, clave } = persona;

  // console.log(name);
  // console.log(edad);
  // console.log(clave);

  const useContext = ({
    edad: age,
    nombre: name,
    clave,
    rango = "Desconocido",
  }) => {
    // const { edad, nombre: name, clave } = user;
    // console.log(edad);

    // console.log(age);
    // console.log(name);
    // console.log(clave);
    // console.log(rango);
    return {
      nombreClave: clave,
      anios: age,
      latlgn: {
        lat: 14.1232,
        lng: -12.3232,
      },
    };
  };
  const {
    nombreClave,
    anios,
    latlgn: { lat, lng },
  } = useContext(persona);
  console.log(nombreClave, anios, lat, lng);
}

{
  // Array Destructuring:
  console.log("// Array.-");

  const females = ["Meliza", "Meylin", "Miriam"];
  const [, , beauty] = females;
  console.log(beauty);

  const retornaArreglo = () => {
    return ["ABC", 123];
  };
  const [lett, num] = retornaArreglo();

  console.log(lett, num);

  // Tarea:
  // 1. el primer valor del arr se llamara nombre
  // 2. se llamara setNombre
  const useState = (valor) => {
    return [
      valor,
      () => {
        console.log("Hola Mundo");
      },
    ];
  };

  const [nombre, setNombre] = useState("Goku");
  // console.log(arr)

  // arr[1]()

  console.log(nombre);
  setNombre();
}
{
  console.log("Heroes json: ", heroesjson);
  // console.log("Heroes js: ", heroes);
  console.log("Heroes js:", heroes);

  // FIND:
  // const getHeroeById = (id) => {
  //   return heroes.find((e) => e.id === id);
  // };
  const getHeroeById = (id) => heroes.find((e) => e.id === id);
  console.log(getHeroeById(2));

  // FILTER:
  const getHeroesByOwner = (owner) => heroes.filter((e) => e.owner === owner);
  console.log(getHeroesByOwner("DC"));
}

{
  // PROMISE
  console.log("// PROMISE:");
  const getHeroeById = (id) => heroes.find((e) => e.id === id);
  const getHeroesByOwner = (owner) => heroes.filter((e) => e.owner === owner);

  // const promesa = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     // console.log("2 segundos despues");
  //     const heroe = getHeroeById(9);
  //     if (heroe) {
  //       resolve(heroe);
  //     } else {
  //       reject("No se pudo encontrar el heroe");
  //     }
  //   }, 2000);
  // });

  // promesa
  //   .then((res) => {
  //     console.log("El then de la promesa");
  //     console.log(res);
  //   })
  //   .catch((err) => console.error(err));

  const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // console.log("2 segundos despues");
        const heroe = getHeroeById(id);
        if (heroe) {
          resolve(heroe);
        } else {
          reject("No se pudo encontrar el heroe");
        }
      }, 2000);
    });
  };

  getHeroeByIdAsync(10).then(console.log).catch(console.warn);
}

/* {
  console.log("Fetch:");
  // Fetch API
  const apiKey = "nm3aLKxIwBOmRpCcx7Kq7aNVndv5LeY5";
  fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`)
    .then((res) => (!res.ok ? Promise.reject("Personal error") : res.json()))
    .then(({ data }) => {
      // console.log(data);
      const $fragment = document.createDocumentFragment();
      data.map((e) => {
        const { url } = e.images.original;
        const $img = document.createElement("img");
        $img.src = url;
        $fragment.append($img);
      });
      document.querySelector("#app").append($fragment);
    })
    .catch(console.err);
}
 */

{
  // Asyn Await:
  // const getImagenPromesa = () => {
  //   const promesa = new Promise((resolve, reject) => {
  //     resolve("https://jasldjlkfadsk.com");
  //   });
  //   return promesa;
  // };

  // getImagenPromesa().then(console.log);

  const getImagenPromesa = () =>
    new Promise((resolve) => resolve("https://jasldjlkfadsk.com"));

  getImagenPromesa().then(console.log);

  // BETTER:
  // const getImage = async () => {
  //   return "https://jasldjlkfadsk.com";
  // };

  // getImage().then((res) => console.log(res));

  const getImage = async () => {
    const $fragment = document.createDocumentFragment();
    const apiKey = "nm3aLKxIwBOmRpCcx7Kq7aNVndv5LeY5";
    try {
      const res = await fetch(
        `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`
      );
      const { data } = await res.json();

      data.map((e) => {
        const { url } = e.images.original;
        const $img = document.createElement("img");
        $img.src = url;
        $fragment.append($img);
      });
      document.querySelector("#app").append($fragment);
    } catch (err) {
      console.log(err);
    }
  };

  getImage();
}

{
  // Opereador ternario

  const activo = true;

  const message = activo ? "The user it's online" : "The user it's offline";

  console.log(message);

  console.log(activo && "The user it's online");

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite! ${`JavaScript      is beautiful`} 
    ${"Dance"}</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector("#counter"));
