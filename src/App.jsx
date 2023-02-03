import { BrowserRouter, Routes, Route, Link, redirect } from "react-router-dom";
import NotFound from "./components/NotFound";
import Demo from "./components/Demo";
import { useState, useEffect, useRef } from "react";
import { getPersojes, getSelecPersonaje } from "./api/service";

const App = () => {
  const buscarpersonaje = useRef(null);
  const [personajes, setPersonaje] = useState([]);
  const [selecpersonaje, setSelecPersonaje] = useState(1);
  const [detalles, setDetalles] = useState({});
  const [textBuscar, settextBuscar] = useState("");

  useEffect(() => {
    getPersojes().then((data) => setPersonaje(data.results));
  }, []);

  useEffect(() => {
    getSelecPersonaje(selecpersonaje).then(setDetalles);
  }, [selecpersonaje]);

  const MostarDetalle = (personaje) => {
    console.log("first");
    const id = Number(personaje.url.split("/").slice(-2)[0]);
    console.log(personaje);
    setSelecPersonaje(id);
  };

  const buscar = (e) => {
    e.preventDefault();
    const text = buscarpersonaje.current.value;
    console.log("first",text)
    settextBuscar(text);
  };

  

  const buscarIntro = () => {
    setDetalles({})
    setSelecPersonaje(textBuscar);  
  };

      console.log("first,", detalles);
       console.log("sele", selecpersonaje);

  
  return (
    <div className="Aplicacion">
      <div className="m-3">
        <div className="row g-3">
          <div className="col-auto">
            <select
              className="form-select form-select-lg mb-2"
              aria-label=".form-select-lg example"
            >
              {personajes.map((personaje) => (
                <option
                  key={personaje.name}
                  onClick={() => MostarDetalle(personaje)}
                >
                  &#xf2be;
                  {personaje.name}
                </option>
              ))}
            </select>
          </div>

          <div className="col-auto ">
            <label>id</label>
            <input
              type="text"
              className="border border-secondary-subtle p-2"
              ref={buscarpersonaje}
              onChange={buscar}
              placeholder="Buscar personaje"
            />
          </div>

          <div className="col-auto">
            <Link to={`/demo/${textBuscar}`}>
              <button
                type="button"
                className="btn btn-outline-success"
                onClick={buscarIntro}
              >
                Enviar
              </button>
            </Link>

            {
              <aside>
                {detalles.detail ? (
                  <NotFound />
                ) : (
                  <Routes>
                    <Route
                      path="/demo/:id"
                      element={<Demo datos={detalles} />}
                    />
                  </Routes>
                )}
              </aside>
            }
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
