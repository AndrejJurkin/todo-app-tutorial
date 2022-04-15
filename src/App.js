import "./index.css";
import TodoList from "./components/TodoList";
import AddTodoRow from "./components/AddTodoRow";
import { useState } from "react";

const INITIAL_DATA = [
  {
    id: 1,
    text: "Learn HTML/CSS",
    completed: true,
  },
  {
    id: 2,
    text: "Learn JavaScript",
    completed: false,
  },
  {
    id: 3,
    text: "Learn ReactJS",
    completed: false,
  },
  {
    id: 4,
    text: "Build Projects & Portfolio",
    completed: false,
  },
];

function App() {
  const [data, setData] = useState(INITIAL_DATA);

  function addTodo(todo) {
    setData([...data, todo]);
  }

  function deleteTodo(id) {
    setData(data.filter((todo) => todo.id !== id));
  }

  function toggleTodo(id) {
    setData(
      data.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  return (
    <div className="w-full h-screen flex flex-col items-center bg-slate-50 px-8">
      <h1 className="text-4xl font-bold mb-12 mt-32">What's your plan?</h1>
      <div className="bg-white w-full shadow-xl rounded-xl max-w-lg overflow-hidden">
        <TodoList data={data} onDelete={deleteTodo} onComplete={toggleTodo} />
        <AddTodoRow onAddTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
