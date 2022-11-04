import Global from "./styles/Global";
import Routes from "./routes";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./contexts/AuthContext";
import { JobProvider } from "./contexts/JobContext";
import { JobProvider as JobProviderDU } from "./contexts/JobContextDU";
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
            <JobProviderDU>
              <Routes />
            </JobProviderDU>
          </JobProvider>
        </UserProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
