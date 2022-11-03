import Global from "./styles/Global";
import Routes from "./routes";
import "./App.css";
import { AuthProvider } from "./contexts/AuthContext";
import { JobProvider } from "./contexts/JobContext";

function App() {
  return (
    <div className="App">
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
