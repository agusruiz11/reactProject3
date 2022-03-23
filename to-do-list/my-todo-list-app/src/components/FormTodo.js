import React from "react";
import { useState } from "react";

// // export default function FormTodo (props) {
// //     return (
// //         <form>
// //       <input type="text" classNameName="todo-input" />
// //       <button className="todo-button" type="submit">
// //         <i class="fa-solid fa-square-plus"></i>
// //       </button>
//       <div className="select">
//         <select name="todos" className="filter-todo">
//           <option value="all">All</option>
//           <option value="completed">Completed</option>
//           <option value="uncompleted">Uncompleted</option>
//         </select>
// //       </div>
// //     </form>
// //     )
// // };

export default function FormTodo (props) {
  const { handleAddItem } = props;
  const [inputToDo, setInputToDo] = useState("");
  const handleSubmit = e => {
    e.preventDefault(); // para que evitar que se refresque la página
    setInputToDo("");
    props.handleAddItem(inputToDo);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="todo-list">
        <div className="file-input">
          <input
            type="text"
            className="text"
            value={inputToDo}
            onChange={e => setInputToDo(e.target.value)}
          />
          <button
            className="todo-button"
            disabled={inputToDo ? "" : "disabled"}
          >
            <i className="fa-solid fa-square-plus"></i>
          </button>
        </div>
      </div>
    </form>
  );
};