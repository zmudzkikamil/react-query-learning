import axios from "axios"
import IUsers from "../types/users"

export const fetchUserById = async (userId:string):Promise<IUsers> =>{
    const res = await axios(`http://localhost:4000/friends/${userId}`)
    return await res.data
    }