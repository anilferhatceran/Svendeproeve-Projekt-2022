import './App.css'
import './index.css'
import Header from "./Components/Header"
import Frontpage from "./Components/Frontpage"
import dummyData from './dummyData'
import Card from './Components/Card'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './Components/About'
import MapTest from './Components/MapTest'

function App() {
  return (
    <Router>
      <div>
          <Header/>
          <Routes>
            <Route path="/" element={<Frontpage/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/test" element={<MapTest/>}/>
          </Routes>
      </div>
    </Router>
  )
}

export default App

