import axios from 'axios'
import ISuperhero from '../types/superheroes'

export const fetchHero = async ({ queryKey }:{queryKey:string[]}): Promise<ISuperhero> => {
	const heroId = queryKey[1]
	const res = await axios(`http://localhost:4000/superheroes/${heroId}`)
	return res.data
}
