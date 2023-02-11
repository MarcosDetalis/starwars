import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
import { getAxios } from "../api/service";
function People() {
  let userId = useParams();
  const [post, setFiltro] = useState([]);

    useEffect(() => {
      getAxios(userId.people, userId.id).then(setFiltro);
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
              <h2>Altura:{post.height}</h2>
              <h3>Masa: {post.mass}</h3>
              <h4> color de pelo: {post.hair_color}</h4>
              <h5> Edad :{post.birth_year}</h5>
            </>
          )}
        </aside>
      }
    </div>
  );
}

export default People;