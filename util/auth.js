import axios from "axios";
import { apiKey } from "../keys";


export async function authenticateUser(mode,email,password){

    const url= `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${apiKey}`;
    const response = await axios.post(url,{
        email:email,
        password:password,
        returnSecureToken:true,
    });
    const token = response.data.idToken;
    return token;
}

// export async function createUser(email,password) {
//   const response = await axios.post(
//     "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + apiKey,
//     {
//         email:email,
//         password:password,
//         returnSecureToken:true,
//     }
//   );
// }
