import React from 'react'
import { useParams } from "react-router-dom";
import { getPersojes, getSelecPersonaje } from "../api/service";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

function Demo() {
  const params = useParams();

  console.log(params.id);

  
  const [responseData, setResponseData] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/" + params.id)
      .then((response) => {
        console.log("p", response.data);
        setResponseData(response.data);
      })
      .catch((error) => {
        console.log(",el error", error);
      });
  }, []);


  console.log("jooo", responseData);
  
  return (
    <div>
      {params.id}
      {responseData && (
        <aside>
          <h1>{responseData.name}</h1>
          <h2>Altura:{responseData.height}</h2>
          <h3>Masa: {responseData.mass}</h3>
          <h4> color de pelo: {responseData.hair_color}</h4>
          <h5> Edad :{responseData.birth_year}</h5>
        </aside>
      )}
    </div>
  );
}

export default Demo