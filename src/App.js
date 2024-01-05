import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Secondnav from './components/Navbar/Secondnav'
import Ui from './components/Main/Ui'
import Sl from './components/Slider/Sl'
import Cards from './components/Indoor plants/Cards'
import Crd from './components/Outdoor plants/Crd'
function App() {
  return (
    <>
    <Navbar/> 
    <Secondnav/> 
    <Ui/>
    <Sl/>
    <Cards/>
    <Crd/>
    </>
  )
}
export default App