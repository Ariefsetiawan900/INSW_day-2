import React from 'react'
import Navbar from './components/Navbar'
import SectionImg from './components/SectionImg'
import SectionText from './components/SectionText'
import Pic1 from './img/1.jpeg'
import Pic2 from './img/2.jpeg'
import Pic3 from './img/4.jpeg'
import Pic4 from './img/5.jpeg'
import "./App.css"

const App = () => {
  return (
    <>
      <Navbar/>
      <main>
        <SectionImg img={Pic1} title="Home" tag="home" />
        <SectionText title="about" tag="about"/>
        <SectionImg img={Pic2} title="Services" tag="services" />
        <SectionImg img={Pic3} title="Contacts" tag="contacts" />
        <SectionImg img={Pic4} title="Feedback" tag="feedback" />
      </main>
    </>
  )
}

export default App
