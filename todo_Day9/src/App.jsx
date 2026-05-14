import Header from './components/Header'
import Login1 from './components/Login1'
import TodoList from './components/TodoList'
import { Routes, Route } from "react-router-dom"
import User from './components/user'
import withLoader from './components/withLoader'
const UserWithLoader = withLoader(User)
function App() {
  
  return (
    <UserWithLoader name= "Ram"/>
    // <>
    // <Header/>
    // <Routes>
    //   <Route path = "/" element = {<Login1/>}/>
    //   <Route path = "/TodoList" element = {<TodoList/>}/>
    // </Routes>
    // </>
   
  )
}

export default App
