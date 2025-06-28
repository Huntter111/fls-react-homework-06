import { useWindowSize } from './useWindowSize'
import smartphoneImg from '../../assets/smartphone.png'
import tabletImg from '../../assets/tablet.png'
import pcImg from '../../assets/monitor.png'

const WindowSize = () => {
	const { width, height } = useWindowSize()
	let imgUrl = smartphoneImg
	if (width > 991) imgUrl = pcImg
	else if (width > 479) imgUrl = tabletImg
	return (
		<div className="flex flex-col items-center max-w-3xl gap-8">
			<div>
				Задача 3. useWindowSize – розмір вікна браузера Створіть кастомний хук
				useWindowSize, який повертає поточну ширину та висоту вікна браузера.
				<br />
				Він повинен оновлюватися при зміні розміру вікна. <br />
				Створіть компонент, який відображає поточні розміри вікна браузера
				(ширина x висота), використовуючи useWindowSize. <br />
				На основі розмірів відображати іконки монітора, планшета або телефона.
			</div>
			<div className="flex flex-wrap items-center justify-center gap-4 md:justify-stretch">
				<img src={imgUrl} width={150} height={150} alt="" />
				<div className="flex flex-col gap-4">
					<span>Ширина вікна: {width}</span>
					<span>Висота вікна: {height}</span>
				</div>
			</div>
		</div>
	)
}

export default WindowSize
