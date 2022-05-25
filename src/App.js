import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Pages/Home/Home';
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
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders';
import AddProduct from './Pages/Dashboard/AddProduct';
import ManageProduct from './Pages/Dashboard/ManageProduct';
import Blog from './Pages/Home/Blog';
import Payment from './Pages/Dashboard/Payment';
import Footer from './Pages/Home/Footer';
import NotFound from './Pages/Home/NotFound';
function App() {
  return (
    <div>
      <Navber></Navber>
      <Routes>
      <Route path='/' element ={<Home></Home>}></Route>
      <Route path='/blog' element ={<Blog></Blog>}></Route>
      <Route path='/dashboard' element ={<Dashboard></Dashboard>}>
        <Route path='myOrders' element={<MyOrder></MyOrder>}></Route>
        <Route path='review' element={<AddReview></AddReview>}></Route>
        <Route index element={<MyProfile></MyProfile>}></Route>
        <Route path='users' element={<MakeAdmin></MakeAdmin>}></Route>
        <Route path='allorders' element={<ManageAllOrders></ManageAllOrders>}></Route>
        <Route path='addproduct' element={<AddProduct></AddProduct>}></Route>
        <Route path='manageproduct' element={<ManageProduct></ManageProduct>}></Route>
        <Route path="payment/:id" element ={<Payment></Payment>}></Route>
      </Route>
      <Route path='/purchase/:pharchaseId' element ={<RequireAuth>
        <Pharchase></Pharchase>
      </RequireAuth>}></Route>
      
      <Route  path='/login' element={<Login></Login>}></Route>
      <Route  path='/signup' element={<SignUp></SignUp>}></Route>
      <Route  path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
