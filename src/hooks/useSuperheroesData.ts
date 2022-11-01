import { useQuery, useMutation, useQueryClient } from 'react-query'
import { addSuperHero } from '../features/addSuperHero'
import { fetchData } from '../features/fetchData'
import ISuperhero from '../types/superheroes'

export const useSuperheroesData = (onSuccess: (data: ISuperhero[]) => void, onError: (error: Error) => void) => {
	return useQuery<ISuperhero[], Error>('superheroes', fetchData, {
		onSuccess,
		onError,
	})
}

export const useAddSuperHeroData = () => {
	const queryClient = useQueryClient()
	return useMutation(addSuperHero, {
		// Auto refetch on success. Creates additional get request.
		// onSuccess: () => {
		// 	queryClient.invalidateQueries('superheroes')
		// },

		// optimistic update
		onMutate: async (newHero: ISuperhero) => {
			await queryClient.cancelQueries(['superheroes'])
			const previousHeroes = queryClient.getQueryData<ISuperhero[]>(['superheroes'])

			if (previousHeroes) {
				queryClient.setQueryData<ISuperhero[]>(['superheroes'], [...previousHeroes, newHero])
			}

			return { previousHeroes }
		},
		onError: (err, newHero, context) => {
			queryClient.setQueryData(['todos'], context?.previousHeroes)
		},
		onSettled: () => {
			queryClient.invalidateQueries(['superheroes'])
		},
	})
}
