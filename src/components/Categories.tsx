import "../App.css";
import AccordionComponent from "./Accordion";
import { Button } from "keep-react";
import Shifts from "../components/Shifts";
import Confirmation from "../components/Confirmation";
import {useState } from "react";
import ProgressComponent from "../components/ProgressBar";



export const Categories = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [infoFromSteps, setInfoFromSteps] = useState({})


  //COMUNICATION BETWEEEN COMPONENTS

  const handleInfoFromSteps = (data) =>{
    setInfoFromSteps((prevInfo) => ({...prevInfo, ...data}))

    
  }
  //COMUNICATION BETWEEEN COMPONENTS

  //VALIDATON LOGIC FOR STEPS

  const validateData = () =>{

    console.log(infoFromSteps)
    if('data' in infoFromSteps ){
      return true
    }else if('shiftData' in infoFromSteps){
      return true
    }
    else if(Object.keys(infoFromSteps).length === 0){
      console.log('objeto vacio')
      return false
    }
  }
  //VALIDATON LOGIC FOR STEPS

  //STEPPER LOGIC - SPECIALLY MADE IT FOR THE PROGRESS BAR
  const nextStep = () => {
     
    if(validateData()){

      setCurrentStep(currentStep + 1);
      
    }else{
       null   

    }

  };

  const ValidateShiftData = () =>{

    if('shiftData' in infoFromSteps && 'data' in infoFromSteps){
      return true
    }else{
      return false
    }
  }

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const resetSteps = () => {
    setCurrentStep(1);

   
  };
  //STEPPER LOGIC - SPECIALLY MADE IT FOR THE PROGRESS BAR

  

  return (
    <section className="flex flex-col border-0 border-gray-200 rounded p-3 w-full">
    <ProgressComponent value={currentStep * 33.3333333333  } />
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
        className={`flex flex-row my-5 w-full ${
          currentStep < 3 ? "justify-end" : "justify-between"
        }`}
      >
        {currentStep > 1 && currentStep <= 3 && (
          <Button
            size="xs"
            className="text-indigo-800 border-1 font-semibold border-indigo-800 bg-gray-100 hover:bg-indigo-800 hover:text-gray-50 duration-300 transition-all eas-in-out"
            onClick={prevStep}
            
          >
            Anterior
          </Button>
        )}
        {currentStep === 1 && validateData() && (
          <Button
            size="xs"
            className="text-indigo-800 border-1 font-semibold border-indigo-800 bg-gray-100 hover:bg-indigo-800 hover:text-gray-50 duration-300 transition-all eas-in-out"
            onClick={nextStep}
            disabled={validateData() ? false : true}
          >
            Siguiente
          </Button>
        )}
        {currentStep === 2 && (
          <Button
            size="xs"
            className="text-indigo-800 border-1 font-semibold border-indigo-800 bg-gray-100 hover:bg-indigo-800 hover:text-gray-50 duration-300 transition-all eas-in-out"
            onClick={nextStep}
            disabled={ValidateShiftData() ? false : true}
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
            Confirmar
          </Button>
        )}
      </div>

    </section>
  );
};

export default Categories;
