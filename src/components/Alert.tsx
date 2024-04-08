import { Check } from 'phosphor-react'
import { Button, Modal, Typography } from 'keep-react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ModalComponent = ({isOpen, closeModal}:any) => {


  return (
    <>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <Modal.Body className="flex flex-col items-center">
          <Modal.Icon className="h-20 w-20 bg-indigo-100 text-indigo-800">
            <Check size={60} />
          </Modal.Icon>
          <Modal.Content className="my-4 text-center">
            <Typography variant="h3" className="mb-2 text-body-1 font-bold text-metal-900">
              ¡Service Reserved!
            </Typography>
            <Typography variant="p" className="text-body-4 font-normal text-metal-600">
              Your service has has been succesfully reserved.
            </Typography>
          </Modal.Content>
          <Modal.Footer>
            <Button onClick={closeModal} size="sm" color="primary" className='bg-indigo-800'>
              Confirm
            </Button>
          </Modal.Footer>
        </Modal.Body>
      </Modal>
    </>
  )
}