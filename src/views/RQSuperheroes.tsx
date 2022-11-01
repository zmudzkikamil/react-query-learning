import { useState } from 'react'
import { UseQueryResult } from 'react-query'
import { Link } from 'react-router-dom'
import { useAddSuperHeroData, useSuperheroesData } from '../hooks/useSuperheroesData'
import ISuperhero from '../types/superheroes'

interface Props {}

const RQSuperheroes: React.FC = (props: Props) => {
	const [name, setName] = useState('')
	const [alterEgo, setAlterEgo] = useState('')

	const onSuccess = (data: ISuperhero[]) => {
		console.log('side effect after fetching', data)
	}
	const onError = (error: Error) => {
		console.log('side effect after error', error)
	}
	const { isLoading, isError, error, data /*, refetch*/ }: UseQueryResult<ISuperhero[], Error> = useSuperheroesData(
		onSuccess,
		onError
	)
	const { mutate } = useAddSuperHeroData()
	const handleAddHeroClick = () => {
		const hero = { name, alterEgo, id: data ? data.length+1 : Math.random() }
		mutate(hero)
	}
	if (isLoading) {
		return <h2>Loading...</h2>
	}
	if (isError) {
		return <p>{error.message}</p>
	}
	return (
		<>
			<div>RQSuperheroes React query page</div>
			<div>
				<input type='text' onChange={e => setName(prev => (prev = e.target.value))} />
				<input type='text' onChange={e => setAlterEgo(prev => (prev = e.target.value))} />
				<button onClick={handleAddHeroClick}>Add Hero</button>
			</div>
			{/* without Invalidation we need a button to refetch the data */}
			{/* <button onClick={() => refetch()}>Fetch heroes</button> */}
			{data?.map(hero => {
				return (
					<Link to={`/rq-super-heroes/${hero.id}`} key={hero.id}>
						{hero.name}
					</Link>
				)
			})}
			{/* {
				data?.map(hero=> <div key={hero}>{hero}</div>)
			} */}
		</>
	)
}

export default RQSuperheroes
