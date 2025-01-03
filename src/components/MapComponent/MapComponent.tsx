import { useCallback, useState } from 'react'
import { FeatureGroup, MapContainer, TileLayer } from 'react-leaflet'
import { EditControl } from "react-leaflet-draw";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import { Modal } from '../Modal';
import { Coordinate } from '../../types/coordinate.interface';
import { constants } from '../../common/constants';



export const MapComponent = () => {
	const [coordinates, setCoordinates] = useState<Coordinate[]>([]);
	const [isModalOpen, setIsModalOpen] = useState<Boolean>(false);


	const closeModal = () => {
		setIsModalOpen(false);
	};

	const onCreated = useCallback((e: any) => {
		if (e.layer.getLatLngs()[0][0]) {
			setCoordinates(e.layer.getLatLngs()[0]);
			setIsModalOpen(true);
		}
	}, []);

	return (
		<MapContainer
			center={constants.POSITION}
			zoom={13}
			scrollWheelZoom={false}
			style={{ height: '100vh', width: '100%' }}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
			/>

			<Modal isOpen={isModalOpen}
				onClose={closeModal}
				coordinates={coordinates}
			/>
			<FeatureGroup>
				<EditControl
					position={"topright"}
					onCreated={onCreated}
					draw={{
						rectangle: true,
						circle: false,
						circlemarker: false,
						marker: false,
						polyline: false,
					}}
				/>

			</FeatureGroup>
		</MapContainer>
	)
}
