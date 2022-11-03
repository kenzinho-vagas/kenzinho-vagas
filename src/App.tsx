import Global from './styles/Global';
import './App.css';
// import RoutesMain from './routes';
import DashboardUser from './pages/DashboardUser';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <Global />
      <ToastContainer/>
      {/* <RoutesMain/> */}
      <DashboardUser/>
    </div>
  );
}

export default App;