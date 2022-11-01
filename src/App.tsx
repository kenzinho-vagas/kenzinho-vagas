import Global from './styles/Global';
import './App.css';
import Header from './components/Header';
import DashboardAdmin from './pages/DashboardAdmin';
import RoutesMain from './routes';

function App() {
  return (
    <div className="App">
      <Global />
      <RoutesMain/>
    </div>
  );
}

export default App;
