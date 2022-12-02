import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { useState } from "react";
import SignIn from './components/SignIn';
import SignUp from "./components/SignUp";
import Home from "./components/Home/Home";
import Sidebar from "./components/Sidebar/Sidebar";
import InfoGraph from "./components/InfoGraph/InfoGraph";
import {graphData} from './components/InfoGraph/graphData';
import "./App.css"

function App() {
  const [sensorData] = useState({
    labels: graphData.map((data) => data.year),
    datasets: [{
      label: 'Minutos Encendidos:', 
      data: graphData.map((data) => data.userGain)
    }]
  });
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/*" element={<Logged />} >
          <Route path={"home"} element={<Home/>}/>
          <Route path={"infoGraph"} element={<InfoGraph chartData={sensorData}/>} />
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
      <Outlet/>
    </div>
  )
}

export default App;
