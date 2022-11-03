import Global from "./styles/Global";
import Routes from "./routes";
import "./App.css";
<<<<<<< HEAD
import { ToastContainer } from 'react-toastify';
=======
import { AuthProvider } from "./contexts/AuthContext";
>>>>>>> 7dcb6328eb18a76c303f39b2a8f52c02c45c4eb3

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Global/>
      <Routes/>
      <ToastContainer/>
=======
      <Global />
      <AuthProvider>
        <Routes />
      </AuthProvider>
>>>>>>> 7dcb6328eb18a76c303f39b2a8f52c02c45c4eb3
    </div>
  );
}

export default App;
