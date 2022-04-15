import React from "react";
import DeleteIcon from "../assets/DeleteIcon.svg";

export default function TodoListItem({ item, onComplete, onDelete }) {
  function handleComplete() {
    onComplete(item.id);
  }

  function handleDelete() {
    onDelete(item.id);
  }

  return (
    <li className="list-none py-2 flex flex-row gap-6 items-center px-6 ">
      <input
        type="checkbox"
        className="w-6 h-6 rounded-full bg-slate-100 border-slate-400 border-2"
        onClick={handleComplete}
        checked={item.completed}
      />
      <span
        className={`text-xl flex-1 ${
          item.completed && "line-through text-gray-500"
        }`}
      >
        {item.text}
      </span>
      <button
        className="flex place-items-center p-3 rounded-xl hover:bg-slate-100"
        onClick={handleDelete}
      >
        <img
          src={DeleteIcon}
          alt="Delete Todo"
          className="w-6 h-6 cursor-pointer"
        />
      </button>
    </li>
  );
}
