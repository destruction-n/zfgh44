import React, { useEffect, useState } from 'react'
import { FeatureGroup, MapContainer, TileLayer } from 'react-leaflet'
import { LatLngTuple } from 'leaflet'
import { EditControl } from "react-leaflet-draw";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import { Modal } from '../Modal';


const position: LatLngTuple = [53.9294, 27.5707]
export interface Coordinate {
	lat: number;
	lng: number;
}

export const MapComponent = ({

}) => {
	const [coordinates, setCoordinates] = useState<Coordinate[]>([]);
	const [isModalOpen, setIsModalOpen] = useState<Boolean>(true);
	useEffect(() => {
		setIsModalOpen(!isModalOpen)
	}, [coordinates]);

	const closeModal = () => {
		setIsModalOpen(false);
	};

	function onCreated(e: any) {
		if (e.layer.getLatLngs()[0][0]) {
			setCoordinates(e.layer.getLatLngs()[0]);

		}
	}
	console.log(coordinates)
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

						polyline: true,
					}}
				/>

			</FeatureGroup>
		</MapContainer>
	)
}
