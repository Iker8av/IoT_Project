import React from 'react'
import Sheet from '../Sheet/Sheet'
import "./Home.css"

export default function Home() {
  return (
    <div className='Home'>
        <header>
            <div className='row'>
                <h1>Welcome, Username!</h1> {/* User name prop */}
            </div>
        </header>
        <section>
        <h2>House Status</h2>
          <div class = "scrolling-wrapper">
            <div class = 'card'><h2>Entries</h2></div>
            <div class = 'card'><h2>Doors</h2></div>
            <div class = 'card'><h2>Windows</h2></div>
            <div class = 'card'><h2>Lights</h2></div>
            <div class = 'card'><h2>Gas</h2></div>
          </div>
        </section>
        {/* Sheet */}
    </div>
  )
}