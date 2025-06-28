import {
	useCallback,
	useDeferredValue,
	useEffect,
	useMemo,
	useState,
} from 'react'
import GridRow from './GridRow'

import Loader from '../Loader/Loader'
import { useFetching } from './useFetching'

const url = 'https://jsonplaceholder.typicode.com/comments'

const DataGrid = () => {
	const [fetchData, isLoading, error] = useFetching(url)
	console.log(' DataGrid ~ error:', error)
	const [data, setData] = useState([])
	const [text, setText] = useState('')
	const [sort, setSort] = useState('')
	useEffect(() => {
		setData(fetchData)
	}, [fetchData])

	const deferredValue = useDeferredValue(text)
	const handleSortedAsc = useCallback(() => setSort('asc'), [])
	const handleSortedDesc = useCallback(() => setSort('desc'), [])
	const handleSortedReset = useCallback(() => setSort('reset'), [])

	const filteredAndSortedData = useMemo(() => {
		if (!Array.isArray(data)) return []
		let filtered = data.filter((el) =>
			el.body.toLowerCase().includes(deferredValue.toLowerCase()),
		)
		if (sort === 'asc') {
			return [...filtered].sort((a, b) => a.body.localeCompare(b.body))
		} else if (sort === 'desc') {
			return [...filtered].sort((a, b) => b.body.localeCompare(a.body))
		} else if (sort === 'reset') {
			return [...filtered].sort((a, b) => a.postId - b.postId)
		}
		return filtered
	}, [data, sort, deferredValue])

	if (error) {
		return <div className="pt-8 text-xl text-red-500">Помилка: {error}</div>
	}
	if (isLoading) {
		return (
			<div className="flex justify-center pt-8 mt-20">
				<Loader />
			</div>
		)
	}
	return (
		<div className="pt-8">
			<div className="flex flex-wrap gap-4 mb-4">
				<label className="flex-grow text-xl font-bold">
					Фільтрація коментарів:
					<input
						className="max-w-[300px]"
						type="text"
						value={text}
						onChange={(e) => setText(e.target.value)}
					/>
				</label>
				<div className="flex flex-col gap-2">
					<div className="text-xl text-center">Сортування за описом</div>
					<div className="flex gap-4 mt-4">
						<button onClick={handleSortedAsc}>Вгору</button>
						<button onClick={handleSortedDesc}>Вниз</button>
						<button onClick={handleSortedReset}>Початкове</button>
					</div>
				</div>
			</div>
			<div>
				<div className="pt-8">
					{!!filteredAndSortedData.length &&
						filteredAndSortedData.map((comment) => (
							<GridRow key={comment.id} {...comment} />
						))}
				</div>
			</div>
		</div>
	)
}

export default DataGrid
