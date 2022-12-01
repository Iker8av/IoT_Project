import React from 'react'
import "./Sheet.css"

export default function Sheet({opcSelected, data, setData}) {
  return (
    <div className={`Sheet ${data && "active"}`}>
      <div className='sheet-box'>
        <header>
          <h2>{opcSelected}</h2>
          <button className='close-button' onClick={() => setData(null)}>
            <span></span>
          </button>
        </header>
      </div>
    </div>
  )
}
