const login = (userName,password)=>{
    console.log("from login dunction at UI")
    console.log(userName,password);
    fetch(`http://localhost:3000/users?username=${userName}&password=${password}`)
    .then(response => response.json())
    .then(data => console.log(data))
    
}
export default login;