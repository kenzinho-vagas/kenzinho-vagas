import Global from './styles/Global';
import './App.css';
import Header from './components/Header';
import DashboardAdmin from './pages/DashboardAdmin';

function App() {
  return (
    <div className="App">
      <Global />
      <DashboardAdmin/>
    </div>
  );
}

export default App;
