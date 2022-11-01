import React from 'react'
import './App.css'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import Superheroes from './views/Superheroes'
import RQSuperheroes from './views/RQSuperheroes'
import Home from './views/Home'
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import RQSuperhero from './views/RQSuperhero'
import ParallelQueries from './views/ParallelQueries'
import DynamicParallel from './views/DynamicParallel'
import DependentQueries from './views/DependentQueries'
import PaginatedQueries from './views/PaginatedQueries'
import InfiniteQueries from './views/InfiniteQueries'

const queryClient = new QueryClient()
const App: React.FC = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<Router>
				<div>
					<nav>
						<ul>
							<li>
								<Link to='/'>Home</Link>
							</li>
							<li>
								<Link to='/super-heroes'>Traditional Super Heroes</Link>
							</li>
							<li>
								<Link to='/rq-super-heroes'>RQ Super Heroes</Link>
							</li>
							<li>
								<Link to='/rq-parallel'>RQ Parallel</Link>
							</li>
							<li>
								<Link to='/rq-dynamic-parallel'>RQ dynamic Parallel</Link>
							</li>
							<li>
								<Link to='/rq-dependent-queries'>RQ dependent Queries</Link>
							</li>
							<li>
								<Link to='/rq-paginated-queries'>RQ Paginated Queries</Link>
							</li>
							<li>
								<Link to='/rq-infinite-queries'>RQ Infinite Queries</Link>
							</li>
						</ul>
					</nav>
					<Routes>
						<Route path='/rq-infinite-queries' element={<InfiniteQueries />} />
						<Route path='/rq-paginated-queries' element={<PaginatedQueries />} />
						<Route path='/rq-dependent-queries' element={<DependentQueries userId={'3'} />} />
						<Route path='/rq-dynamic-parallel' element={<DynamicParallel heroIds={[1, 3]} />} />
						<Route path='/rq-parallel' element={<ParallelQueries />} />
						<Route path='/rq-super-heroes/:heroId' element={<RQSuperhero />} />
						<Route path='/super-heroes' element={<Superheroes />} />
						<Route path='/rq-super-heroes' element={<RQSuperheroes />} />
						<Route path='/' element={<Home />} />
					</Routes>
				</div>
			</Router>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	)
}

export default App
