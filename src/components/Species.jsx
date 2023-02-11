import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
import { getAxios } from "../api/service";
function Species() {
  let userId = useParams();
  const [post, setFiltro] = useState([]);
  
  useEffect(() => {
    getAxios("species", userId.id).then(setFiltro);
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
              <h2>Clasificacion:{post.classification}</h2>
              <h3>Designacion: {post.designation}</h3>
              <h4>Lenguaje: {post.language}</h4>
              <h5>Color de la piel :{post.skin_colors}</h5>
            </>
          )}
        </aside>
      }
    </div>
  );
}

export default Species;
