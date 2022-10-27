import axios from 'axios'
import ISuperhero from '../types/superheroes'

export const fetchData = async (): Promise<ISuperhero[]> => {
	const res = await axios('http://localhost:4000/superheroes')
	return await res.data
}
