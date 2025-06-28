import { useMemo, useState } from 'react'
import ResultDisplay from './ResultDisplay'

const Calculator = () => {
	console.log('-- Calculator --')

	const [count, setCount] = useState(0)
	const [a, setA] = useState('')
	const [b, setB] = useState('')

	const resultSum = useMemo(() => {
		return a + b
	}, [a, b])

	const handleChange = (set) => (e) => {
		set(parseInt(e.target.value))
	}
	return (
		<div className="flex flex-col max-w-xl">
			<div className="mb-8">
				<ul className="flex flex-col gap-2 ">
					<li>
						Задача 1. Оптимізація вибіркового рендеру з useMemo та React.memo
					</li>
					<li>
						Створіть компонент-калькулятор, який має два незалежні поля вводу:
						одне для числа A і одне для числа B.{' '}
					</li>
					<li>
						Також є окремий компонент ResultDisplay, який відображає A + B.
					</li>
					<li>
						Обгорніть ResultDisplay у React.memo(). Використайте useMemo в
						батьківському компоненті, щоб обчислити A + B і передати цей
						результат до ResultDisplay.
					</li>
					<li>
						Переконайтеся, що ResultDisplay ререндериться лише тоді, коли
						змінюються A або B, а не коли змінюється інший незалежний стан у
						батьківському компоненті (наприклад, лічильник, що не впливає на A
						чи B).
					</li>
				</ul>
			</div>
			<div className="flex justify-center max-w-xl gap-4">
				<label>
					Введіть число A:
					<input
						type="number"
						inputMode="numeric"
						name="a"
						value={a}
						onChange={handleChange(setA)}
					/>
				</label>

				<label>
					Введіть число B:
					<input
						type="number"
						inputMode="numeric"
						name="b"
						value={b}
						onChange={handleChange(setB)}
					/>
				</label>
			</div>
			<div>
				<ResultDisplay result={resultSum} />
			</div>
			<div className="flex flex-col gap-2 my-4">
				<div>Кількість кліків: {count}</div>
				<button onClick={() => setCount((prev) => prev + 1)}>Click here</button>
			</div>
		</div>
	)
}

export default Calculator
