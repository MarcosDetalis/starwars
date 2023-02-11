import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
import { getAxios } from "../api/service"
function Vehicles() {

  let userId = useParams();
  console.log("first",userId.id,userId.vehicles)
  const [post, setFiltro] = useState([]);
  useEffect(() => {
    getAxios("vehicles", userId.id).then(setFiltro);
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
              <h3>Combustible: {post.consumables}</h3>
              <h4> Pasageros: {post.passengers}</h4>
              <h5> Capacidad de carga :{post.cargo_capacity}</h5>
            </>
          )}
        </aside>
      }   
    </div>
  );
}

export default Vehicles;
