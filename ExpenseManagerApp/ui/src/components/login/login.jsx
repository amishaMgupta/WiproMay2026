import { useState } from 'react'
import './login.css'
import login from '../../service/login'
function Login(){
    const [userName,setUserName] = useState("")
    const [password,setPassword] = useState("")
    const handleOnclick = () => {
        login(userName,password)
        setUserName("")
        setPassword("")

    }
    return (
        <div id = "login">
        <h1>Login</h1>
        <label >UserName</label>
        <input
            value = {userName}
            onChange = {(e) =>setUserName(e.target.value)}
        ></input>
        <br></br>
        <label>Password</label>
        <input
            value = {password}
            onChange = {(e) => setPassword(e.target.value)}
            type = "password">
        </input>
        <br></br>
        <button
            onClick = {handleOnclick}>Login</button>
        </div>
        
    )
}
export default Login 