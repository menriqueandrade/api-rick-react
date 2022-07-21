import { useState } from "react";
import Formulario from "./components/Formulario";
import Mostrardatos from "./components/Mostrardatos";
function App() {
  const [nombrePersonaje, setNombrePersonaje] = useState("");
  return (
    <div className="container">
      <h1>
        <span>Rick and Morty</span>
        <Formulario setNombrePersonaje={setNombrePersonaje} ></Formulario>
        <Mostrardatos nombrePersonaje ={nombrePersonaje}></Mostrardatos>
      </h1>
    </div>
  );
}
export default App;
