import { useState } from 'react'
import { Check } from 'phosphor-react'
import { Button, Modal, Typography } from 'keep-react'

export const ModalInformation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
    
  }
  const closeModal = () => {
    setIsOpen(false)
    
  }

  return (

    <>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <Modal.Body className="flex flex-col items-center">
          <Modal.Icon className="h-20 w-20 bg-success-50 text-success-500">
            <Check size={60} />
          </Modal.Icon>
          <Modal.Content className="my-4 text-center">
            <Typography variant="h3" className="mb-2 text-body-1 font-bold text-metal-900">
              Payment Successful
            </Typography>
            <Typography variant="p" className="text-body-4 font-normal text-metal-600">
              Your document has unsaved changes. Discard or save them as a new page to continue.
            </Typography>
          </Modal.Content>
          <Modal.Footer>
            <Button onClick={closeModal} size="sm" color="success">
              Confirm
            </Button>
          </Modal.Footer>
        </Modal.Body>
      </Modal>
    </>
  )
}