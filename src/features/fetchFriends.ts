import axios from 'axios'
import { IFriends } from '../types/friends'

export const fetchFriends = async (): Promise<IFriends[]> => {
	const res = await axios('http://localhost:4000/friends')
	return res.data
}
