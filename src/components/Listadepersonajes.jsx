import React from "react";
 
function Listadepersonajes(props) {
  console.log("dfgdf,,,", props.datos);

  return (
    <div>
      <h1>{props.datos.name}</h1>
      <h2>Altura:{props.datos.height}</h2>
      <h3>Masa: {props.datos.mass}</h3>
      <h4> color de pelo: {props.datos.hair_color}</h4>
      <h5> Edad :{props.datos.birth_year}</h5>
    </div>
  );
}

export default Listadepersonajes;
