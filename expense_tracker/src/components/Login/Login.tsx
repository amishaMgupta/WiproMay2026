
import TextField from '@mui/material/TextField'; 
import Button from '@mui/material/Button';
import { useState } from 'react';
import login from '../service/UserService';
// import type {User} from "../model/user";
import "./Login.css";
function Login(){
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
   const handleOnClick = async () => {
        let result : string;
        result= await login(email,password);
        console.log(result);
    }


    return(
        <div id = "LoginForm">
            <TextField
            required
            id="outlined-required"
            label="Email"
            type= "email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            defaultValue = "Enter Your Email"
            
        />
        <br/>
        <TextField
            required
            id="outlined-required"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            defaultValue = "Enter Your Password"
        />
        <br />
        <Button variant="text" onClick={handleOnClick}>Submit</Button>
       
        </div>)
}
export default Login;