import React from 'react'
import { useLocation } from "react-router-dom";




function Layout() {


  const location = useLocation();
  const data = location.state;
  console.log("DATT",data);


  return (
    <div>
      Layout
      <aside>
        <h1>{data.name}</h1>
        <h2>Altura:{data.height}</h2>
        <h3>Masa: {data.mass}</h3>
        <h4> color de pelo: {data.hair_color}</h4>
        <h5> Edad :{data.birth_year}</h5>
      </aside>
    </div>
  );
}

export default Layout