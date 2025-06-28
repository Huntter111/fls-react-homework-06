import { Link } from 'react-router'
import NavBar from '../routes/NavBar'

const Header = () => {
	return (
		<header className="flex items-center gap-4 :gap-8">
			<h2 className="flex-grow flex-shrink-0 text-xl">
				<Link to="/">Homework 6</Link>
			</h2>
			<NavBar />
		</header>
	)
}

export default Header
