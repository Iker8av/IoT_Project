import React from 'react'
import "./Sheet.css"

export default function Sheet({opcSelected, data, setData}) {

  const minutes = (sec) => {
    return Math.floor(sec / 60)
  }

  return (
    <div className={`Sheet ${data && "active"}`}>
      <div className='sheet-box'>
        <header>
          <h2>{opcSelected}</h2>
          <button className='close-button' onClick={() => setData(null)}>
            <span></span>
          </button>
        </header>
        <div className='sheet-content'>
          {data && data.map( (item) => {return (<section key={item.name}>
            <div>
              <p>{item.name}</p>
              <h3>{minutes(item.lastUpdate)} minutes ago</h3>
            </div>
            {item.open ? 
            <p style={{"color":"green"}}>Open</p> : <p style={{"color":"red"}}>Close</p>}
          </section>)})}
        </div>
      </div>
    </div>
  )
}

export function SheetLights({opcSelected, data, setData}) {

  const minutes = (sec) => {
    return Math.floor(sec / 60)
  }

  return (
    <div className={`Sheet ${data && "active"}`}>
      <div className='sheet-box'>
        <header>
          <h2>{opcSelected}</h2>
          <button className='close-button' onClick={() => setData(null)}>
            <span></span>
          </button>
        </header>
        <div className='sheet-content'>
          
        </div>
      </div>
    </div>
  )
}
