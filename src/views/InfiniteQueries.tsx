import axios from 'axios'
import React from 'react'
import { useInfiniteQuery } from 'react-query'
import { IColor } from '../types/color'

interface Props {}

const fetchInfColors = async ({ pageParam = 1 }): Promise<IColor[]> => {
	const res = await axios(`http://localhost:4000/colors?_limit=2&_page=${pageParam}`)
	return await res.data
}

const InfiniteQueries: React.FC<Props> = () => {
	const { data, error, isError, isLoading, hasNextPage, fetchNextPage, isFetching, isFetchingNextPage } =
		useInfiniteQuery<IColor[], Error>(['inf-colors'], fetchInfColors, {
			getNextPageParam: (_lastPage, pages) => {
				if (pages.length < 4) {
					return pages.length + 1
				} else {
					return undefined
				}
			},
		})
	if (isLoading) {
		return <h2>Loading...</h2>
	}
	if (isError) {
		return <p>{error.message}</p>
	}
	return (
		<>
			<div>
				{data?.pages.map((page, i) => (
					<div key={i}>
						{page.map(color => (
							<h2 key={color.id}>
								{color.id}. {color.label}
							</h2>
						))}
					</div>
				))}
			</div>
			<div>
				<button disabled={!hasNextPage} onClick={() => fetchNextPage()}>
					Load more
				</button>
				<div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
			</div>
		</>
	)
}

export default InfiniteQueries
