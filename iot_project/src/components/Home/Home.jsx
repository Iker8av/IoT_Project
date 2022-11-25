import React from 'react';
import Sheet from '../Sheet/Sheet';
import Entries from './Views/Entries/Entries';

import "./Home.css"

export default function Home() {
  return (
    <div className='Home'>
        <header>
            <div className='row'>
                <h1>Welcome, Username!</h1> {/* User name prop */}
            </div>
            <div className='entries'>
                <Entries/>
            </div>
        </header>
        <section>
          {/* Carrusel */}
        </section>
        {/* Sheet */}
    </div>
  )
}