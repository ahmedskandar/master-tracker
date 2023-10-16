import { TodoProvider } from "./context/TodoCategoryContext";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <TodoProvider>
      <ToastContainer pauseOnHover={false} autoClose={2000} theme="dark" />
      <Home />
    </TodoProvider>
  );
}

export default App;
