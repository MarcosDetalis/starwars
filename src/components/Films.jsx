import { useEffect, useState } from "react";
import { useParams, Outlet } from "react-router-dom";
import NotFound from "./NotFound";
import { getAxios } from "../api/service";

function Films() {
  let userId = useParams();
  const [post, setFiltro] = useState([]); 
 useEffect(() => {
   getAxios("films", userId.id).then(setFiltro);
 }, [userId.id]);

  return (
    <div>
      {
        <aside>
          {post == "error" ? (
            <NotFound />
          ) : (
            <>
               
              <h1>{post.title}</h1>
              <h2>Episodio:{post.episode_id}</h2>
              <h3>Director: {post.director}</h3>
              <h4>Porduccion: {post.producer}</h4>
              <h5>Fecha de lanzamiento:{post.release_date}</h5>
            </>
          )}
        </aside>
      }
   
    </div>
  );
}

export default Films;
