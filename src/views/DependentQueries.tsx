import React from 'react'
import { useQuery } from 'react-query'
import { fetchHero } from '../features/fetchHero'
import { fetchUserById } from '../features/fetchUserById'
import { IFriends } from '../types/friends'
import ISuperhero from '../types/superheroes'

interface Props {
	userId: string
}

const DependentQueries: React.FC<Props> = ({ userId }) => {
	const { data: user } = useQuery<IFriends, Error, IFriends, string[]>(['user', userId], () => fetchUserById(userId))
	const superheroId = user?.id.toString()
	const { data: alterEgo, isLoading: alterEgoIsLoading } = useQuery<ISuperhero, Error, string, string[]>(
		['alterEgo', superheroId ?? '1'],
		fetchHero,
		{
			enabled: !!superheroId,
			select: data => data.alterEgo,
		}
	)
    if (alterEgoIsLoading) return <h2>Loading...</h2>
	return (
		<>
			<h2>Dependent Queries</h2>
            <p>alterEgo of {user?.name} is {alterEgo} because user ID is equal to superHero ID.</p>
		</>
	)
}

export default DependentQueries
