import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Notifications, { notify } from "react-notify-toast";
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Dashboard from './components/Account/Dashboard';

function App() {
  return (
    <Router>
    <Notifications></Notifications>
      <Routes>
        <Route exact path='/' element={< Login />}></Route>
        <Route path='/register' element={< Register />}></Route>
        <Route path='/dashboard' element={< Dashboard />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
