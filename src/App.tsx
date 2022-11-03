import Global from "./styles/Global";
import Routes from "./routes";
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from "./contexts/AuthContext";
import { JobProvider } from "./contexts/JobContext";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Global />
      <AuthProvider>
        <JobProvider>
          <Routes />
        </JobProvider>
      </AuthProvider>
    </div>
  );
}

export default App;