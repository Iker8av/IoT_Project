import React from "react";
import "./Sidebar.css"
import Cloud from './2469994.PNG'

export default function Sidebar() {
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
  ];
  const sufix = ["st", "nd", "th"];
  let sufijo;

  const current = new Date();

  if(current.getDate() === 1 || current.getDate() === 11 || current.getDate() === 21 || current.getDate() === 31) sufijo = sufix[0];
  else if(current.getDate() === 2 || current.getDate() === 12 || current.getDate() === 22) sufijo = sufix[1];
  else sufijo = sufix[2];

  const hours = current.getHours();
  const ampm = hours >= 12 ? 'pm' : 'am';

  const date = `${monthNames[current.getMonth()]} ${current.getDate()}${sufijo}, ${current.getFullYear()}`;
  const hour = `${current.getHours()}:${current.getMinutes()} ${ampm}`;

  return (
    <div className='Sidebar'>
        <div>
            <h1>Dashboard</h1>
            <p>{date}</p>
            <p>{hour}</p>
            <div className="imagen">
              <img src={Cloud} alt="Imagen de nube" />
            </div>
            <button className='alertButton'>It's Raining!</button>
        </div>
        <div style={{"width":"100%"}}>
          <button className='classic-button'>Log Out</button>
        </div>
    </div>
  )
}
