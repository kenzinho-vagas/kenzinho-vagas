import Global from "./styles/Global";
import Routes from "./routes";
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from "./contexts/AuthContext";
import { JobProvider } from "./contexts/JobContext";
import "./App.css";
import { UserProvider } from "./contexts/UserContext";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Global />
      <AuthProvider>
        <UserProvider>
          <JobProvider>
            <Routes />
          </JobProvider>
        </UserProvider>
        
      </AuthProvider>
    </div>
  );
}

export default App;