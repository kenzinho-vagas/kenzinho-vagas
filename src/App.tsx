import Global from "./styles/Global";
import Routes from "./routes";
import "./App.css";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <Global/>
      <Routes/>
      <ToastContainer/>
    </div>
  );
}

export default App;