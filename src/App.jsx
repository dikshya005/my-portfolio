import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Body from './Body'
import Button from './Button'

function App() {
  

  return (
   <main>
    <Navbar/>
<Body/>
<Button button="Contact me" color="orange" icon="contacts"/>

<Button button="My project" color="blue" icon="github"/>
 <h1 className="text-3xl font-bold underline">
   Hello world!
 </h1>

    </main>
  )


}
  


export default App
