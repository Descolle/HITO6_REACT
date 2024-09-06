import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import CardPizza from "./components/CardPizza";
import Cart from "./components/Cart";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import NotFound from "./components/views/NotFound";
import Profile from "./components/views/Profile";
import Pizza01 from "./components/views/Pizza01";
import CartProvider from "./components/Context/CartContext";


function App() {
  return (
    <>
    <CartProvider>
    <NavBar/>
    <Routes>
      <Route path="/HITO6_REACT/" element={<Home/>}/>
      <Route path="/HITO6_REACT/pizza" element={<CardPizza/>}/>
      <Route path="/HITO6_REACT/pizza/01" element={<Pizza01/>}/>
      <Route path="/HITO6_REACT/cart" element={<Cart/>}/>
      <Route path="/HITO6_REACT/login" element={<LogIn/>}/>
      <Route path="/HITO6_REACT/register" element={<SignUp/>}/>
      <Route path="/HITO6_REACT/profile" element={<Profile/>}/>
      <Route path="/HITO6_REACT/*" element={<NotFound/>}/>
    </Routes>
    </CartProvider>
    </>
  );
}

export default App;
