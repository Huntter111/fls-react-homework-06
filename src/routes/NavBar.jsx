import { NavLink } from 'react-router'
const links = [
	{
		to: '/task1',
		text: 'Task 1',
	},
	{
		to: '/task2',
		text: 'Task 2',
	},
	{
		to: '/task3',
		text: 'Task 3',
	},
	{
		to: '/task4',
		text: 'Task 4',
	},
]
const NavBar = () => {
	return (
		<nav className="flex flex-wrap gap-2 sm:gap-4">
			{links.map((link, index) => (
				<NavLink
					key={index}
					to={link.to}
					className={({ isActive }) =>
						`text-xl p-1 sm:py-1 px-2 border rounded-[8px] ${
							isActive ? 'border-blue-500 text-blue-500' : 'border-transparent'
						}`
					}
				>
					{link.text}
				</NavLink>
			))}
		</nav>
	)
}

export default NavBar
