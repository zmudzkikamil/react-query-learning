import axios from 'axios'
import { IColor } from '../types/color'

export const fetchColors = async (pageNumber: number): Promise<IColor[]> => {
	const res = await axios(`http://localhost:4000/colors?_limit=2&_page=${pageNumber}`)
	return await res.data
}
