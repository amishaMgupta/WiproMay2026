import type { User } from "../model/user";
//
    const login =async (email:string,password:string):Promise<string> =>{
        let result:string = "Failed";
        let counter:number =0;
        await fetch("http://localhost:3000/users")
        .then((res) => res.json())
        .then((data) =>{
            data.forEach((user:User) => {
                if(user.email === email && user.password === password){
                    counter++;
                }
            })
            if(counter > 0){
                result = "Success";
                console.log("result = ",result);
            }
            
        })
        console.log("result = ",result);
        return result;
    }

// const getAll = () =>{

// }
// const add= () =>{

// }
// const update = () =>{

// }
export default login