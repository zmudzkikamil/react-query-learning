import React, { useEffect, useState } from 'react'
import ISuperhero from '../types/superheroes'
import { fetchData } from '../features/fetchData'

interface Props {}

const Superheroes: React.FC = (props: Props) => {
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const [data, setData] = useState<ISuperhero[]>([])
	const [error, setError] = useState<string>('')
	useEffect(() => {
		const getData = async () => {
			try {
				const heroes = await fetchData()
				setIsLoading(false)
				setData(heroes)
			} catch (error) {
				setIsLoading(false)
				let message = 'Unknown Error'
				if (error instanceof Error) message = error.message
				setError(message)
			}
		}
		getData()
	}, [])
	if (isLoading) return <h2>Loading...</h2>
	if (error) return <h2>{error}</h2>
	return (
		<>
			<h2>Superheroes traditional page</h2>
			{data.map(hero => {
				return <div key={hero.id}>{hero.name}</div>
			})}
		</>
	)
}

export default Superheroes
