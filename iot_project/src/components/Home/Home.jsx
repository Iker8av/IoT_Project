import React from 'react'
import Sheet from '../Sheet/Sheet'
import "./Home.css"
import Icons from './Icons'
import axios from "axios"

export default function Home() {
  const [data, setData] = React.useState(null)
  const [opcSelected, setOpc] = React.useState(null)

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
            {dataType.map((e, i) => {return (
              <Square name={e} data={data} key={e}
                setData={setData} setOpc={setOpc}
              />)
              })}
          </div>
        </article>
        <Sheet opcSelected={opcSelected} data={data} setData={setData}/>
    </div>
  )
}


export function Square({name, data, setData, setOpc}){

  const buttonPressed = async () => {
    setOpc(name);
    axios.get(`http://localhost:3001/get${name}`)
      .then(response => {
                  setData(response.data)
                  console.log(response.data) 
                })
                .catch(error => {
                  console.error(error)
                })
    
  }

  return(
    <section className='square' onClick={() => buttonPressed()}>
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