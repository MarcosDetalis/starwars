import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { useState, useRef } from "react";
import Species from "./components/Species";
import Vehicles from "./components/Vehicles";
import Starships from "./components/Starships";
import Planets from "./components/Planets";
import Films from "./components/Films";
import People from "./components/People";
const App = () => {
  const IdInput = useRef(null);
  const [selecOption, setSelecOption] = useState("people");
  const [textBuscar, settextBuscar] = useState("");

  const MostarDetalle = (title) => {
    setSelecOption(title);
  };

  const buscar = (e) => {
    e.preventDefault();
    const text = IdInput.current.value;
    settextBuscar(text);
  };

  console.log("op", selecOption);

  const array = [
    { title: "people" },
    { title: "planets" },
    { title: "films" },
    { title: "species" },
    { title: "vehicles" },
    { title: "starships" },
  ];

  return (
    <div className="Aplicacion">
      <div className="m-3">
        <div className="row g-3">
          <div className="col-auto">
            <select
              className="form-select form-select-lg mb-2"
              aria-label=".form-select-lg example"
            >
              {array.map((titulo) => (
                <option
                  key={titulo.title}
                  onClick={() => MostarDetalle(titulo.title)}
                >
                  &#xf2be;
                  {titulo.title}
                </option>
              ))}
            </select>
          </div>

          <div className="col-auto ">
            <label>id</label>
            <input
              type="text"
              className="border border-secondary-subtle p-2"
              ref={IdInput}
              onChange={buscar}
              placeholder="Buscar por id"
            />
          </div>

          <div className="col-auto">
            <Link to={`/${selecOption}/${textBuscar}`}>
              <button
                type="button"
                className="btn btn-outline-success"
                //onClick={buscarIntro}
              >
                Enviar
              </button>
            </Link>
          </div>
          <Routes>
            <Route path="/:people/:id" element={<People />} />
            <Route path="/planets/:id" element={<Planets />} />
            <Route path="/films/:id" element={<Films />} />
            <Route path="/species/:id" element={<Species />} />
            <Route path="/vehicles/:id" element={<Vehicles />} />
            <Route path="/starships/:id" element={<Starships />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};
export default App;
