import { memo } from 'react'

const GridRow = ({ postId, id, name, email, body }) => {
	return (
		<div className="p-4 mb-4 border rounded border-amber-400">
			<h2 className="text-2xl">{name}</h2>
			<h3>Post id: {postId}</h3>
			<h4>Email: {email}</h4>
			<p className="underline">Description: {body}</p>
			<h5>Id: {id}</h5>
		</div>
	)
}

export default memo(GridRow)
