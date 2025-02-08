import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import { Routes,Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import {ToastContainer} from "react-toastify"
import Dashboard from "./pages/Dashboard"

function App() {

  return (
    <>
   <Navbar/>
   <Routes>
    <Route path={"/"} element={<Home/>}></Route>
    <Route path={"/signup"} element={<Signup/>}></Route>
    <Route path={"/login"} element={<Login/>}></Route>
    <Route path={"/dashboard"} element={<Dashboard/>}></Route>
   </Routes>
   <ToastContainer/>
    </>
  )
}

export default App
