import { useState } from 'react'
import { Info } from 'phosphor-react'
import { Button, Checkbox, Label, Modal, Typography } from 'keep-react'
import { ModalInformation } from './ModalInformation'

export const ModalConfirmation = () => {

  const [isOpen, setIsOpen] = useState(true)
  const [success, setSuccess] = useState(false);

  const closeModal = (status) => {
    setIsOpen(status)
    setSuccess(status)
    
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={() => closeModal(false)}>
        <Modal.Body className="space-y-3">
          <Modal.Icon>
            <Info size={28} weight="fill" />
          </Modal.Icon>
          <Modal.Content>
            <Typography variant="div" className="!mb-6">
              <Typography variant="h3" className="mb-2 text-body-1 font-medium text-metal-900">
                Update Modal Status
              </Typography>
              <Typography variant="p" className="text-body-4 font-normal text-metal-600">
                Your document has unsaved changes. Discard or save them as a new page to continue.
              </Typography>
            </Typography>
            <Typography variant="fieldset" className="mb-3 flex items-center gap-2">
              <Checkbox id="checkbox" />
              <Label htmlFor="checkbox" className="text-body-4 font-normal text-metal-600">
                I understand, no need to repeat
              </Label>
            </Typography>
          </Modal.Content>
          <Modal.Footer>
            <Button onClick={() => closeModal(false)} size="sm" variant="outline" color="secondary">
              Cancel
            </Button>
            <Button onClick={() => closeModal(true)} size="sm" color="primary">
              Confirm
            </Button>
          </Modal.Footer>
        </Modal.Body>
      </Modal>

      {success ? <ModalInformation/>: null}
    </>
  )
}