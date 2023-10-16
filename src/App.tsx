import { TodoProvider } from "./context/TodoContext";
import Home from "./pages/Home";

function App() {
  return (
    <TodoProvider>
      <Home />
    </TodoProvider>
  );
}

export default App;
