import React from "react";
import TodoListItem from "./TodoListItem";

export default function TodoList({ data, onComplete, onDelete }) {
  const emptyState = (
    <p className="text-xl text-slate-600 px-6 py-4 text-left w-full">
      All Tasks Are Done, Good Job!
    </p>
  );

  return (
    <div className="flex flex-col py-6">
      {!data?.length && emptyState}
      {data?.map((item) => (
        <TodoListItem
          key={item.id}
          item={item}
          onComplete={onComplete}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
