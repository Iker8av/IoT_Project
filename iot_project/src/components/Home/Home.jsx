import React from 'react'
import Sheet from '../Sheet/Sheet'
import "./Home.css"
import Icons from './Icons'

export default function Home() {
  const [data, setData] = React.useState(null)

  const dataType = ["Entries", "Doors", "Windows", "Light"]

  return (
    <div className='Home'>
        <header>
            <div className='row'>
                <h1>Welcome, Username!</h1> {/* User name prop */}
            </div>
        </header>
        <article>
          <h2>House Status</h2>
          <div className='carrousel'>
            {dataType.map((e, i) => {return <Square name={e} i={i}/>})}
          </div>
        </article>
        {/* Sheet */}
    </div>
  )
}

export function Square({name, i}){
  return(
    <section className='square'>
      <div className='container'>
        <header>
          <div className='img-container'>
            <Icons icon={name}/>
            {/* <img src={Door} alt="icon" /> */}
          </div>
          <span style={{"color":"var(--blue)"}}>More...</span>
        </header>
        <div>
          <h2>{name}</h2>
          <span style={{"color":"red"}}>Status</span>
        </div>
      </div>
    </section>
  )
}