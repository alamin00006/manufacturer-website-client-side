import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Pages/Home/Home';
import Payment from './Pages/Home/Payment';
import Pharchase from './Pages/Home/Pharchase';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequreAuth';
import SignUp from './Pages/Login/SignUp';
import Navber from './Pages/Navber/Navber';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyOrder from './Pages/Dashboard/MyOrder';
import AddReview from './Pages/Dashboard/AddReview';
import MyProfile from './Pages/Dashboard/MyProfile';
function App() {
  return (
    <div>
      <Navber></Navber>
      <Routes>
      <Route path='/' element ={<Home></Home>}></Route>
      <Route path='/dashboard' element ={<Dashboard></Dashboard>}>
        <Route index element={<MyOrder></MyOrder>}></Route>
        <Route path='review' element={<AddReview></AddReview>}></Route>
        <Route path='profile' element={<MyProfile></MyProfile>}></Route>
      </Route>
      <Route path='/purchase/:pharchaseId' element ={<RequireAuth>
        <Pharchase></Pharchase>
      </RequireAuth>}></Route>
      <Route path='/payment/:id' element ={<Payment></Payment>}></Route>
      <Route  path='/login' element={<Login></Login>}></Route>
      <Route  path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
