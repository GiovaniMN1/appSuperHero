import React from "react";
import Nav from "./componentes/Nav";
import Personaje from "./componentes/Personaje";
import "./index.css"



const App=()=>{
  return(
    
      <div className="container p-3 mb-2 bg-light text-darks">
        <div className="d-flex flex-column">
          <Nav/>
        </div>
        <div className="d-flex flex-column ">
          <Personaje/>
        </div>
      </div>

  )
}

export default App