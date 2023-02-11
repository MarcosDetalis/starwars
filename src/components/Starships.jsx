import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAxios } from "../api/service";
import NotFound from "./NotFound";
function Starships() {


  let userId = useParams();
  const [post, setFiltro] = useState([]);
  
 useEffect(() => {
   getAxios("starships", userId.id).then(setFiltro);
 }, [userId.id]);



  return (
    <div>
      {
        <aside>
          {post == "error" ? (
            <NotFound />
          ) : (
              <>
                 
              <h1>{post.name}</h1>
              <h2>Modelo:{post.model}</h2>
              <h3>Pasageros: {post.passengers}</h3>
              <h4>Capacidad de carga: {post.cargo_capacity}</h4>
              <h5>Fabricante :{post.manufacturer}</h5>
            </>
          )}
        </aside>
      }
    </div>
  );
}

export default Starships;
