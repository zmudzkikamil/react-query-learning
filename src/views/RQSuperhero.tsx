import React from 'react'
import { useSuperheroData } from '../hooks/useSuperheroData'
import { useParams } from 'react-router-dom'

interface Props {}

const RQSuperhero: React.FC = (props: Props) => {
	const { heroId } = useParams()
	const { data } = useSuperheroData(heroId ?? '1')
	return <div>{data?.name} - {data?.alterEgo}</div>
}

export default RQSuperhero
