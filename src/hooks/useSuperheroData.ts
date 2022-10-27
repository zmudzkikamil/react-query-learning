import { useQuery } from 'react-query'
import { fetchHero } from '../features/fetchHero'
import ISuperhero from '../types/superheroes'

export const useSuperheroData = (heroId: string ) => {
	return useQuery<ISuperhero, Error, ISuperhero, string[]>(['superhero', heroId], fetchHero)
}
