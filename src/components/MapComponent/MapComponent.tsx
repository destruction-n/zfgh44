import React, { useEffect, useState } from 'react'
import { MapContainer, Rectangle, TileLayer} from 'react-leaflet'
import { LatLngTuple } from 'leaflet'
import { AreaSelector } from '../AreaSelector'
import { Modal } from '../Modal'

const position: LatLngTuple = [53.9294, 27.5707]

interface MapComponentProps {
	rectangleBounds: LatLngTuple[] | null
	setRectangleBounds: (bounds: LatLngTuple[]) => void
}

export const MapComponent: React.FC<MapComponentProps> = ({
	rectangleBounds,
	setRectangleBounds,
}) => {
		const [isModalOpen, setIsModalOpen] = useState(false);
		console.log('123')
		useEffect(() => {
			if (rectangleBounds) {
				setIsModalOpen(true);
			}
		}, [rectangleBounds]);

		const openModal = () => {
			setIsModalOpen(true);
		};
		
		const closeModal = () => {
			setIsModalOpen(false);
		};
	  	return (
		<MapContainer
			center={position}
			zoom={13}
			scrollWheelZoom={false}
			style={{ height: '100vh', width: '100%' }}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
			/>
			{rectangleBounds  && (
				<>
					<Rectangle
						bounds={rectangleBounds as LatLngTuple[]}
						pathOptions={{ color: 'blue', weight: 3 }}
					/>
					<Modal isOpen={isModalOpen}
						onClose={closeModal} 
						x1 ={rectangleBounds[0][0].toFixed(4)}
						x2 ={rectangleBounds[1][0].toFixed(4)}
						y1 ={rectangleBounds[0][1].toFixed(4)}
						y2 ={rectangleBounds[1][1].toFixed(4)}
					 />

					
				</>
			)}
			<AreaSelector setRectangleBounds={setRectangleBounds} />
		</MapContainer>
	)
}
