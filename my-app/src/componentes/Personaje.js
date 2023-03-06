import React, { useState, useEffect } from "react";
import "./../index.css";

const Personaje = () => {
  const [res, cambiarres] = useState([]);

  useEffect(() => {

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "a2bf6a0f96mshccf9b7107e5813bp178b6ajsnb0fdd528eb8e",
        "X-RapidAPI-Host": "superhero-search.p.rapidapi.com",
      },
    };

    fetch("https://superhero-search.p.rapidapi.com/api/heroes", options)
      .then((response) => response.json())
      .then((res) => cambiarres(res))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="card w-50 p-3 mx-auto">
      <img
        src={
          res.length > 1 && res[0].images
            ? res[0].images.lg
            : "ruta/imagen/por/defecto.jpg"
        }
        className="card-img-top"
        style={{ width: "30%", display: "block", margin: "0 auto" }}
        alt="Nombre del héroe"
      />

      <div className="card-body">
      <h5 className="card-title">Nombre: {res.length > 0 ? res[0].name : "Load"}</h5>
        <p className="card-text">
        Powerstats (combat): {res.length > 0 ? res[0].powerstats.combat : "Load"}
        </p>
        <p className="card-text">
        Appearance (genero): {res.length > 0 ? res[0].appearance.gender : "Load"}
        </p>
        <p className="card-text">
        Biography (primera aparicion): {res.length > 0 ? res[0].biography.firstAppearance: "Load"}
        </p>
        <p className="card-text">
        Connections (parientes): {res.length > 0 ? res[0].connections.relatives: "Load"}
        </p>
        
      </div>
    </div>
  );
};

export default Personaje;
