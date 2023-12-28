import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Secondnav from './components/Navbar/Secondnav'
import Ui from './components/Main/Ui'
import Sl from './components/Slider/Sl'
import Cards from './components/Indoor plants/Cards'
function App() {
  return (
    <>
    <Navbar/> 
    <Secondnav/> 
    <Ui/>
    <Sl/>
    <Cards/>
    </>
  )
}

export default App