import { useMapEvent } from 'react-leaflet'
import { LatLngTuple } from 'leaflet'

interface AreaSelectorProps {
	setRectangleBounds: (bounds: LatLngTuple[]) => void
}

export const AreaSelector: React.FC<AreaSelectorProps> = ({
	setRectangleBounds,
}) => {
	let startPoint: LatLngTuple | null = null

	useMapEvent('mousedown', e => {
		startPoint = [e.latlng.lat, e.latlng.lng]
	})
	
	useMapEvent('mouseup', e => {
		if (startPoint) {
			const endPoint: LatLngTuple = [e.latlng.lat, e.latlng.lng]
			setRectangleBounds([startPoint, endPoint])
			startPoint = null
		}
	})

	return null
}
