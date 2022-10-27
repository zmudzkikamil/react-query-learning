import axios from 'axios'
import React from 'react'
import { useQueries } from 'react-query'
import ISuperhero from '../types/superheroes'

interface Props {
	heroIds: number[]
}
const fetchSuperhero = (heroId: number):Promise<ISuperhero> => {
	return axios.get(`http://localhost:4000/superheroes/${heroId}`)
}
const DynamicParallel: React.FC<Props> = ({ heroIds }) => {
	const queryResults = useQueries(heroIds.map(heroId => ({ queryKey: ['super-hero', heroId], queryFn: ()=> fetchSuperhero(heroId) })))
	console.log(queryResults)
	return <div>DynamicParallel</div>
}

export default DynamicParallel
