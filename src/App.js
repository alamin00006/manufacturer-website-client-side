import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Pages/Home/Home';
import Payment from './Pages/Home/Payment';
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
      <Route path='/purchase/:pharchaseId' element ={<Pharchase></Pharchase>}></Route>
      <Route path='/payment/:id' element ={<Payment></Payment>}></Route>
      <Route  path='/login' element={<Login></Login>}></Route>
      <Route  path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
