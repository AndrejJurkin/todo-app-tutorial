import React, { useState } from "react";
import PlusIcon from "../assets/PlusIcon.svg";
import DeleteIcon from "../assets/DeleteIcon.svg";

export default function AddTodoRow({ onAddTodo }) {
  const [todoText, setTodoText] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setTodoText("");
    onAddTodo({
      id: Date.now(),
      text: todoText,
      completed: false,
    });
  }

  return (
    <form onSubmit={handleSubmit} className="w-full border-t">
      <div className="flex flex-row bg-white px-4 gap-4 items-center">
        <img src={PlusIcon} alt="Add Todo" className="mt-1" />
        <input
          id="todo"
          name="todo"
          type="text"
          placeholder="Add a task"
          className="flex-1 h-16 outline-none focus:ring-transparent border-none text-xl text-slate-800"
          value={todoText}
          onChange={(event) => setTodoText(event.target.value)}
        />
      </div>
      <input type="submit" hidden />
    </form>
  );
}
