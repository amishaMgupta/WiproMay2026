
import {Routes,Route} from "react-router-dom"
import Header from './components/Header/Header.tsx'
import Login from './components/Login/Login.tsx'
import Dashboard from './components/Dashboard/Dashboard.tsx'

import './App.css'

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
    </>
  )
}

export default App
