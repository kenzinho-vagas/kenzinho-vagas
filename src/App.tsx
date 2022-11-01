import Global from './styles/Global';
import './App.css';
// import RoutesMain from './routes';
import DashboardUser from './pages/DashboardUser';

function App() {
  return (
    <div className="App">
      <Global />
      {/* <RoutesMain/> */}
      <DashboardUser/>
    </div>
  );
}

export default App;
