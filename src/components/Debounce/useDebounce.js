import { useEffect, useState } from 'react'

export const useDebounce = (text, delay) => {
	const [debounceValue, setDebounceValue] = useState(text)
	useEffect(() => {
		const timeoutDebounce = setTimeout(() => {
			setDebounceValue(text)
		}, delay)

		return () => {
			clearTimeout(timeoutDebounce)
		}
	}, [text, delay])
	return debounceValue
}
