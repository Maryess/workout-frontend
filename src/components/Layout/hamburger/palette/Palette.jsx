import { FaCircle } from 'react-icons/fa'
import styles from './Palette.module.scss'
import { palettes } from './palettes.data'

const Palette = () => {
	const changeBackgroundColor = color => {
		document.body.style.backgroundColor = color
	}

	return (
		<div className={styles.palette}>
			{palettes.map(palette => (
				<div key={palette.id} className={styles.content}>
					<FaCircle
						fontSize={25}
						color={palette.color}
						onClick={() => {
							changeBackgroundColor(palette.color)
						}}
					/>
				</div>
			))}
		</div>
	)
}

export default Palette