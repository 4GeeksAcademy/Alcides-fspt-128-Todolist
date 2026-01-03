import React, { useState } from "react";

const Home = () => {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);

const handleEnter = (e) => {
  if (e.key !== "Enter") return;

  if (tarea.trim() === "") {
    alert("Rellena los campos");
    return;
  }

  setTareas([...tareas, { tarea }]);
  setTarea("");
};

const handleDelete = (indexToDelete) => {
  setTareas(tareas.filter((_, index) => index !== indexToDelete));
};

  return (
    <div className="todo-page text-center">
      <h1 className="todo-title">Todos</h1>

      <div className="todo-card">
        <input
          className="todo-input"
          type="text"
          value={tarea}
          onChange={(e) => setTarea(e.target.value)}
          onKeyUp={handleEnter}
          placeholder="What needs to be done?"
        />

        <ul className="todo-list">
          {tareas.map((item, index) => (
            <li className="todo-item" key={index}>
              <span className="todo-text">{item.tarea}</span>

              <button
                className="todo-delete"
                onClick={() => handleDelete(index)}
                aria-label="Delete"
                type="button"
              >
                ×
              </button>
            </li>
          ))}
        </ul>

        <div className="todo-footer">
          <span>
            {tareas.length} item{tareas.length !== 1 ? "s" : ""} left
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
