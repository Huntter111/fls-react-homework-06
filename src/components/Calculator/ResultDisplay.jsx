import { memo } from 'react'

const ResultDisplay = ({ result }) => {
	console.log('-- RESULT DISPLAY --')
	return (
		<div className="text-xl">
			Результат суми чисел:{' '}
			{isNaN(result) ? 'немає числа в одному з полів вводу' : result}
		</div>
	)
}

export default memo(ResultDisplay)
