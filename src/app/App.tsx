import { useState } from 'react'
import { LatLngTuple } from 'leaflet'
import { MapComponent } from '../components/MapComponent'

import '../styles/app.css'

export function App() {
	const [rectangleBounds, setRectangleBounds] = useState<LatLngTuple[] | null>(
		null
	)

	return (
		<div className='App'>
			<MapComponent
				rectangleBounds={rectangleBounds}
				setRectangleBounds={setRectangleBounds}
			/>
		</div>
	)
}
