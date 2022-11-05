import Global from "./styles/Global";
import Routes from "./routes";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./contexts/AuthContext";
import { JobProvider } from "./contexts/JobContext";
import { JobProvider as JobProviderDU } from "./contexts/JobContextDU";
import "./App.css";
import { ProfileProvider } from "./contexts/UserContext";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Global />
      <AuthProvider>
        <ProfileProvider>
          <JobProvider>
            <JobProviderDU>
              <Routes />
            </JobProviderDU>
          </JobProvider>
        </ProfileProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
