import Global from "./styles/Global";
import Routes from "./routes";
import "./App.css";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <div className="App">
      <Global />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </div>
  );
}

export default App;
