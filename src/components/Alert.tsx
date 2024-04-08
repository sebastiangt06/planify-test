
import { useState } from 'react'
import { Alert } from 'keep-react'


export const AlertComponent = ({alertState}:{alertState:boolean}) => {
  const [showAlert, setShowAlert] = useState(alertState)
  const onDismiss = () => {
    setShowAlert(!showAlert)
  }
  return (
    <Alert color="success" dismiss={showAlert} className='border border-indigo-800 text-indigo-800'>
      <Alert.Container>
        <Alert.Icon />
        <Alert.Title>¡Shift Reserved!</Alert.Title>
        <Alert.Description>A short description followed by two actions items.</Alert.Description>
      </Alert.Container>
      <Alert.Link>Learn More</Alert.Link>
      <Alert.Dismiss onClick={onDismiss} />
    </Alert>
  )
}