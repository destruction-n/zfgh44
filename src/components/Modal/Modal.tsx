
import { Coordinate } from '../../types/coordinate.interface'
import './Modal.css'

interface ModalProps {
	isOpen: Boolean
	onClose: () => void
	coordinates: Coordinate[] | null
}

export const Modal: React.FC<ModalProps> = ({
	isOpen,
	onClose,
	coordinates,

}) => {
	if (!isOpen) return null
	return (
		<div className='modal'>
			<div className='modal-content'>
				<span className='close' onClick={() => onClose()}>
					&times;
				</span>
				<div>
					{coordinates?.map((e, index) => (
						<div key={index}>
							Coordinate {index + 1}: X: {e.lat.toFixed(4)}, Y: {e.lng.toFixed(4)}
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
