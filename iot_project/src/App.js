import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import SignIn from './components/SignIn';
import SignUp from "./components/SignUp";
import Home from "./components/Home/Home";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/*" element={<Logged />} >
          <Route path={"home"} element={<Home/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export function Logged(){
  return(
    <div className="main-app" >
      <Sidebar/>
      <Home/>
      <Outlet/>
    </div>
  )
}

export default App;
