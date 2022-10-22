import React from "react";
import { ACTIONS } from "./UseReducer";

export default function Todo({ todo, dispatch }) {
  //   console.log(todo);
  return (
    <>
      <div>
        {todo.name}
        <span> </span>
        <button
          style={{ color: todo.complete ? "#AAA" : "#000" }}
          onClick={() =>
            dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })
          }
        >
          toggle Todo
        </button>
        <button
          onClick={() =>
            dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })
          }
        >
          delete Toddo
        </button>
      </div>
    </>
  );
}
