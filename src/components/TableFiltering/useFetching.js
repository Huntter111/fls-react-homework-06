import { useEffect, useState } from 'react'

export const useFetching = (url) => {
	const [fetchData, setFetchData] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState('')
	useEffect(() => {
		const abortController = new AbortController()
		const signal = abortController.signal
		const fetching = async () => {
			setIsLoading(true)
			try {
				const response = await fetch(url, { signal })
				if (!response.ok) {
					throw new Error(`HTTP error! Status: ${response.status}`)
				}
				const dataRes = await response.json()
				setFetchData(dataRes)
			} catch (error) {
				if (error.name === 'AbortError') {
					console.log('Fetch request aborted.')
					return
				}
				setError(error.message)
			} finally {
				setIsLoading(false)
			}
		}
		fetching()
		return () => {
			abortController.abort()
			console.log('Мережевий запит скасовано при очищенні!')
		}
	}, [url])
	return [fetchData, isLoading, error]
}
