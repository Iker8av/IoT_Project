import React from 'react'
import Access from './Views/Access/Access'
import "./Home.css"

export default function Home() {
  return (
    <div className='Home'>
        <header>
            <div className='row'>
                <h1>Welcome, Username!</h1> {/* User name prop */}
                <Access/>
            </div>
        </header>
        <section>
          {/* Carrusel */}
        </section>
        {/* Sheet */}
    </div>
  )
}