import Global from "./styles/Global";
import Routes from "./routes";
import "./App.css";
import { AuthProvider } from "./contexts/AuthContext";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <Global/>
      <AuthProvider>
        <Routes />
      </AuthProvider>    
      <ToastContainer/>
    </div>
  );
}

export default App;