import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import TopBar from './components/topbar/TopBar';
import Home from './pages/home/Home';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';
import Login from './pages/login/Login';

function App() {
  const admin= JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
  return (
    <BrowserRouter>
       <TopBar />
       <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path='/' element={admin ? <Home /> : <Login />} />
          <Route path='/users' element={<UserList />} />
          <Route path='/user/:userId' element={<User />} />
          <Route path='/newUser' element={<NewUser />} />
          <Route path='/products' element={<ProductList />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/newproduct' element={<NewProduct />} />
          <Route path='/login' element={admin ? <Home /> : <Login />} /> 
  
        </Routes>
       </div>
    </BrowserRouter>
  );
}

export default App;
