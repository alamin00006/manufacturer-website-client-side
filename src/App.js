import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Pages/Home/Home';
import Pharchase from './Pages/Home/Pharchase';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import Navber from './Pages/Navber/Navber';

function App() {
  return (
    <div>
      <Navber></Navber>
      <Routes>
      <Route path='/' element ={<Home></Home>}></Route>
      <Route path='/dashboard' element ={<Dashboard></Dashboard>}></Route>
      <Route path='/purchase/:pharchaseDetails' element ={<Pharchase></Pharchase>}></Route>
      <Route  path='/login' element={<Login></Login>}></Route>
      <Route  path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
