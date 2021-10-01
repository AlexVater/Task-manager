import "./App.css";
import TaskListContextProvider from "./context/TaskListContext";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <TaskListContextProvider>
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-pink-500 to-red-500">
        <div className="w-1/3 min-w-min p-12 shadow-2xl rounded bg-gray-800">
          <TaskForm />
          <TaskList />
        </div>
      </div>
    </TaskListContextProvider>
  );
}

export default App;
