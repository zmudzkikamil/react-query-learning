import axios from "axios"
import ISuperhero from "../types/superheroes"

export const addSuperHero = async (hero:ISuperhero) =>{
    const res = await axios.post(`http://localhost:4000/superheroes/`, hero)
    return res.data
}