import "../App.css";
import AccordionComponent from "./Accordion";
import { Button } from "keep-react";
import Shifts from "../components/Shifts";
import Confirmation from "../components/Confirmation";
import { useState } from "react";
import ProgressComponent from "../components/ProgressBar";

const RenderAlert = () =>{
  
}

export const Categories = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [infoFromSteps, setInfoFromSteps] = useState({})
  console.log('info' , infoFromSteps)

  //COMUNICATION BETWEEEN COMPONENTS

  const handleInfoFromSteps = (data) =>{
    setInfoFromSteps((prevInfo) => ({...prevInfo, ...data}))

    
  }
  //COMUNICATION BETWEEEN COMPONENTS

  //VALIDATON LOGIC FOR STEPS

  const validateData = () =>{

    if(Object.keys(infoFromSteps).length === 0){
      return false
    }else if('shiftData' in infoFromSteps && 'data' in infoFromSteps){
      return true
    }else{
      return false
    }
  }
  //VALIDATON LOGIC FOR STEPS




  //STEPPER LOGIC - SPECIALLY MADE IT FOR THE PROGRESS BAR
  const nextStep = () => {
    setCurrentStep(currentStep + 1);
    validateData()
  };
  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const resetSteps = () => {
    setCurrentStep(1);
  };
  //STEPPER LOGIC - SPECIALLY MADE IT FOR THE PROGRESS BAR

  

  return (
    <section className="flex flex-col border-2 border-gray-200 rounded p-3">
      <ProgressComponent value={currentStep * 33.33333333333} />
    {/*  {renderStep()} */}

    {currentStep === 1 && (
        <AccordionComponent handleInfoFromSteps={handleInfoFromSteps} />
      )}
      {currentStep === 2 && (
        <Shifts handleInfoFromSteps={handleInfoFromSteps} />
      )}
      {currentStep === 3 && (
        <Confirmation infoFromSteps={infoFromSteps} />
      )}
      <div
        className={`flex flex-row my-5 ${
          currentStep < 3 ? "justify-end" : "justify-evenly"
        }`}
      >
        {currentStep > 1 && (
          <Button
            size="xs"
            className="text-indigo-800 border-1 font-semibold border-indigo-800 bg-gray-100 hover:bg-indigo-800 hover:text-gray-50 duration-300 transition-all eas-in-out"
            onClick={prevStep}
          >
            Anterior
          </Button>
        )}
        {currentStep < 3 && (
          <Button
            size="xs"
            className="text-indigo-800 border-1 font-semibold border-indigo-800 bg-gray-100 hover:bg-indigo-800 hover:text-gray-50 duration-300 transition-all eas-in-out"
            onClick={nextStep}
          >
            Siguiente
          </Button>
        )}
        {currentStep === 3 && (
          <Button
            size="xs"
            className="text-indigo-800 border-1 font-semibold border-indigo-800 bg-gray-100 hover:bg-indigo-800 hover:text-gray-50 duration-300 transition-all eas-in-out"
            onClick={resetSteps}
          >
            Finalizar
          </Button>
        )}
      </div>
    </section>
  );
};

export default Categories;
