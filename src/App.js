import "./index.css";
import TodoList from "./components/TodoList";
import AddTodoRow from "./components/AddTodoRow";
import Header from "./components/Header";
import useLocalStorage from "./hooks/useLocalStorage";

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
  const [data, setData] = useLocalStorage("todo_items", INITIAL_DATA);

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
      <Header>What's your plan?</Header>
      <div className="bg-white w-full shadow-xl rounded-xl max-w-lg overflow-hidden">
        <TodoList data={data} onDelete={deleteTodo} onComplete={toggleTodo} />
        <AddTodoRow onAddTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
