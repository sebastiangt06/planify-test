import { useEffect, useState } from "react";
import "../App.css";
import { LineProgress } from 'keep-react'

interface ProgressProps{
  value:number;
}

export const ProgressComponent: React.FC<ProgressProps> = ({value}) => {


  
  const [progress, setProgress] = useState(value)

  useEffect(() =>{
    setProgress(value)
  },[value])

  return (

    <LineProgress progress={progress} lineBg="bg-indigo-100" className="bg-indigo-700" size="md">
    </LineProgress>

  )
}

export default ProgressComponent