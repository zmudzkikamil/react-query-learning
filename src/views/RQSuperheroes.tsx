import { UseQueryResult } from 'react-query'
import { Link } from 'react-router-dom'
import { useSuperheroesData } from '../hooks/useSuperheroesData'
import ISuperhero from '../types/superheroes'


interface Props {}

const RQSuperheroes: React.FC = (props: Props) => {
	const onSuccess = (data: ISuperhero[]) => {
		console.log('side effect after fetching', data)
	}
	const onError = (error: Error) => {
		console.log('side effect after error', error)
	}
	const { isLoading, isError, error, data }:UseQueryResult<ISuperhero[],Error>= useSuperheroesData(onSuccess,onError)
	if (isLoading) {
		return <h2>Loading...</h2>
	}
	if (isError) {
		return <p>{error.message}</p>
	}
	return (
		<>
			<div>RQSuperheroes React query page</div>
			{data?.map(hero => {
				return <Link to={`/rq-super-heroes/${hero.id}`} key={hero.id}>{hero.name}</Link>
			})}			
			{/* {
				data?.map(hero=> <div key={hero}>{hero}</div>)
			} */}
		</>
	)
}

export default RQSuperheroes
