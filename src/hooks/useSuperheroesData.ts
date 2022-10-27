import { useQuery } from 'react-query'
import { fetchData } from '../features/fetchData'
import ISuperhero from '../types/superheroes'

export const useSuperheroesData = (onSuccess: (data:ISuperhero[]) => void, onError: (error:Error) => void) => {
	return useQuery<ISuperhero[], Error>('superheroes', fetchData, {
		onSuccess,
		onError
	})
}
