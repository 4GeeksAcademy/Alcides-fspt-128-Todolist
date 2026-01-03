import React, { useState } from "react";

const Home = () => {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);


  const handleEnter = (e) => {
    if(e.key !=="Enter") return;

    if (tarea.trim() == "") {
      alert("Rellena los campos")
      return;
    }
    setTareas([...tareas, { tarea: tarea }])
    setTarea("")
  }


  const handleDelete = (indexToDelete) => {
  setTareas((tareasActuales) =>
    tareasActuales.filter((_, index) => index !== indexToDelete)
  );
};






  return (
    <div className="text-center">
      <h1>Todo List</h1>
      <input
        type="text"
        value={tarea}
        onChange={(e) => setTarea(e.target.value)}
        onKeyUp={handleEnter}
        name="tareas"
      />
      <div className="container d-flex">
        {
          tareas.map((tarea, index) => (
            <div key={index}>
              <p>{tarea.tarea}</p>
              <button onClick={()=>handleDelete(index)}>X</button>
            </div>
          )
          )
        }
      </div>
    </div>
  );
};

export default Home;
