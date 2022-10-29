import React, { useState } from 'react'
import { useColorsData } from '../hooks/useColorsData'

interface Props {}

const PaginatedQueries: React.FC<Props> = () => {
	const [pageNumber, setPageNumber] = useState(1)
	const { data, error, isError, isLoading } = useColorsData(pageNumber)
	const nextPage = () => {
		setPageNumber(page => (page === 4 ? page : page + 1))
	}
	const prevPage = () => {
		setPageNumber(page => (page === 1 ? page : page - 1))
	}
	if (isLoading) {
		return <h2>Loading...</h2>
	}
	if (isError) {
		return <p>{error.message}</p>
	}

	return (
		<>
			<div>
				{data?.map(color => (
					<div key={color.id}>
						<h2>
							{color.id}. {color.label}
						</h2>
					</div>
				))}
			</div>
			<div>
				<button onClick={prevPage} disabled={pageNumber === 1}>
					Previous Page
				</button>
				<button onClick={nextPage} disabled={pageNumber === 4}>
					Next Page
				</button>
			</div>
		</>
	)
}

export default PaginatedQueries
