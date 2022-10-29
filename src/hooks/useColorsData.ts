import { useQuery } from 'react-query'
import { fetchColors } from '../features/fetchColors'
import { IColor } from '../types/color'

export const useColorsData = (pageNumber: number) => {
	return useQuery<IColor[], Error>(['colors', pageNumber], () => fetchColors(pageNumber), {
		keepPreviousData: true,
	})
}
