import Nav from './pages/Nav';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skill from './pages/Skill';
import Contact from './pages/Contact';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'


import './App.css'

function App() {

  return (
    <>
      <Nav/>
      <Home/>
      <Projects/>
      <Skill/>
      <Contact/>
    </>
  )
}

export default App
