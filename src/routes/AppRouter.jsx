import { Route, Routes } from 'react-router'
import Calculator from '../components/Calculator/Calculator'
import WindowSize from '../components/WindowSize/WindowSize'
import Debounce from '../components/Debounce/Debounce'
import TableFiltering from '../components/TableFiltering/TableFiltering'

const AppRouter = () => {
	return (
		<main className="flex justify-center py-20">
			<Routes>
				<Route path="/" element={<Calculator />} />
				<Route path="task1" element={<Calculator />} />
				<Route path="task2" element={<TableFiltering />} />
				<Route path="task3" element={<WindowSize />} />
				<Route path="task4" element={<Debounce />} />
				<Route path="*" element={<Calculator />} />
			</Routes>
		</main>
	)
}

export default AppRouter
