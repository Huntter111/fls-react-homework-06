import { useEffect, useState } from 'react'
import { useDebounce } from './useDebounce'

const array = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`)
const Debounce = () => {
	const [text, setText] = useState('')
	const debounceText = useDebounce(text, 500)
	const [arr, setArr] = useState(array)

	useEffect(() => {
		const filteredArr = array.filter((el) =>
			el.toLowerCase().includes(debounceText.toLowerCase()),
		)
		setArr(filteredArr)
	}, [debounceText])

	return (
		<div className="max-w-5xl">
			<div className="mb-8">
				<h2 className="leading-normal">
					Задача 4. useDebounce – відкладений виклик функції Створіть кастомний
					хук useDebounce, який приймає значення та затримку в мілісекундах. Він
					повинен повертати "відкладене" значення, яке оновлюється лише після
					того, як минув заданий час без змін. Створіть поле пошуку, де
					результати пошуку оновлюються не відразу після кожного символу, а з
					невеликою затримкою (наприклад, 500мс) після зупинки введення,
					використовуючи
				</h2>
				useDebounce.
			</div>
			<div className="mb-8">
				<label className="max-w-md ">
					Введіть текст:
					<input
						type="text"
						value={text}
						onChange={(e) => setText(e.target.value)}
					/>
				</label>
			</div>
			<div>
				<ul className="flex flex-wrap gap-6">
					{arr.map((el, index) => (
						<li key={index}>{el}</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default Debounce
