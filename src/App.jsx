import "./App.css";
import TaskListContextProvider from "./context/TaskListContext";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <TaskListContextProvider>
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-pink-500 to-red-500">
        <div className="w-1/2 min-w-min p-12 shadow-2xl rounded bg-gray-800">
          <h1 className="font-mono font-semibold text-4xl tracking-widest antialiased text-gray-50 text-center mb-8">
            TASK MANAGER
          </h1>
          <TaskForm />
          <TaskList />
        </div>
      </div>
    </TaskListContextProvider>
  );
}

export default App;
