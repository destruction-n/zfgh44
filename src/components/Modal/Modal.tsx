import './Modal.css'

interface ModalProps {
	isOpen: boolean
	onClose: () => void
	x1: number | string
	x2: number | string
	y1: number | string
	y2: number | string
}

export const Modal: React.FC<ModalProps> = ({
	isOpen,
	onClose,
	x1,
	x2,
	y1,
	y2,
}) => {
	if (!isOpen) return null
	return (
		<div className='modal'>
			<div className='modal-content'>
				<span className='close' onClick={() => onClose()}>
					&times;
				</span>
				<div>
					{x1} {x2} {y1} {y2}
				</div>
			</div>
		</div>
	)
}
