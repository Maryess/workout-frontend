import { Link, useNavigate } from 'react-router-dom'
import './hamburger.scss'
import { menu } from './menu.data'

const Menu = () => {
	const navigate = useNavigate()

	return (
		<nav className='menu'>
			<ul>
				{menu.map((item, index) => (
					<li key={`_menu_${index}`}>
						<Link to={item.link}>{item.title}</Link>
					</li>
				))}
				<li>
					<button
						onClick={() => {
							navigate('/logout')
						}}
					>
						Logout
					</button>
				</li>
			</ul>
		</nav>
	)
}

export default Menu