import React from 'react'
import './Entries.css'

import Lights from './Lights/Lights';

export default function Entries() {
  return (
    <div className='entries'>
      <h2 className='entrada'>Entries</h2>
      <div className='titulos'>
        <h3>Name</h3>
        <h3>Status</h3>
        <h3>Last Update</h3>
      </div>
      <Lights/>
    </div>
  )
}
