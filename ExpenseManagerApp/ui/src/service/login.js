const login =async (userName,password)=>{
    console.log("from login dunction at UI")
    console.log(userName,password);
    let result = {}
    await fetch(`http://localhost:3000/users?username=${userName}&password=${password}`)
    .then(response => response.json())
    .then(data => result = data)
    return result;
}
export default login;