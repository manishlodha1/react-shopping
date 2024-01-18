import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SingleProduct from './pages/Product/SingleProduct';
import Product from './pages/Product/SingleProduct';
import ProductList from './pages/ProductList/ProductList';
import Register from './pages/Register/Register';
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/products/:category' element = {<ProductList/>} />
        <Route path='/product/:id' element = {<Product />} />
        <Route path='/cart' element = {<Cart />} />
        <Route path='/login' element ={user ? <Home /> : <Login />} />
        <Route path='/register' element = {user ? <Home /> : <Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
 