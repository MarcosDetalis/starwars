import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAxios } from "../api/service";
import NotFound from "./NotFound";
function Planets() {

  let userId = useParams();
  const [post, setFiltro] = useState([]);
   useEffect(() => {
     getAxios("planets", userId.id).then(setFiltro);
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
              <h2>Rotacion:{post.rotation_period}</h2>
              <h3>Clima: {post.climate}</h3>
              <h4> Gravedad: {post.gravity}</h4>
              <h5> Poblacion :{post.population}</h5>
            </>
          )}
        </aside>
      }
    </div>
  );
}

export default Planets;
