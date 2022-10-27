import React from 'react'
import { useQuery } from 'react-query'
import { fetchData } from '../features/fetchData'
import { fetchFriends } from '../features/fetchFriends'

interface Props {}

const ParallelQueries: React.FC = (props: Props) => {
	const { data: heroes } = useQuery('super-heroes', fetchData)
	const { data: friends } = useQuery('friends', fetchFriends)
	return (
		<div>
			{heroes?.map(hero => (
				<p key={hero.id}>
					{hero.name} - {hero.alterEgo}
				</p>
			))}
			{friends?.map(friend => (
				<p key={friend.id}>{friend.name}</p>
			))}
		</div>
	)
}

export default ParallelQueries
