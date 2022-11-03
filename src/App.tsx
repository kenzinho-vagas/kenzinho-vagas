import Global from "./styles/Global";
import Routes from "./routes";
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from "./contexts/AuthContext";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Global />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </div>
  );
}

export default App;