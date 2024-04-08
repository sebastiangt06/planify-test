import { Services } from "../services/servicesData";
import "../App.css";
import { Accordion, Button } from "keep-react";
import { useState } from "react";
//import Accordion from "react-bootstrap/Accordion";

interface Service {
  id: number;
  name: string;
  category: string;
  description: string;
}

interface ShiftData {
  id: number;
  date: string;
  time: string;
}

interface CombinedData {
  data: Service;
  shiftData?: ShiftData;
}


interface AccordionComponentProps {
  handleInfoFromSteps: (data:CombinedData) => void;
}


export const AccordionComponent: React.FC<AccordionComponentProps> = ({handleInfoFromSteps}) => {

  //
  const [disabledButtons, setDisabledButtons] = useState<number[]>([]);

  const serviceByCategory: Record<string, Service[]> = Services.reduce(
    (acc: Record<string, Service[]>, service: Service) => {
      if (!acc[service.category]) {
        acc[service.category] = [];
      }
      acc[service.category].push(service);
      return acc;
    },
    {}
  );

  const handleClick = (data: Service) => {

    //Logic made for disabled buttons
    const isDisabled = disabledButtons.includes(data.id)

    if(isDisabled){
     
    setDisabledButtons(prevDisabledButtons => isDisabled ? prevDisabledButtons.filter(id => id !== data.id) : [...prevDisabledButtons, data.id])
 
    }else{
      setDisabledButtons([data.id])
    } 
    //Logic made for disabled buttons


    //SENDING INFORMATION BETWEEN COMPONENTS

    handleInfoFromSteps({data})


  };



  

  return (
    <>
      <h6 className="text-xl m-4 font-bold text-gray-700">Categories</h6>
      <Accordion className="space-y-4 h-full">
        {Object.keys(serviceByCategory).map((category, index) => {
          return (
            <Accordion.Panel className="bg-metal-100">
              <Accordion.Container className="p-3">
                <Accordion.Title
                  key={index}
                  className="text-metal-700 font-semibold first-letter:mr-0 first-letter:text-metal-700"
                >
                  {category}
                </Accordion.Title>
                <Accordion.Icon />
              </Accordion.Container>
              <Accordion.Content className="p-1">
                {serviceByCategory[category].map((service: Service) => (
                  <div className="flex flex-col m-4 rounded" key={service.id}>
                    <div className={` bg-gray-50 border-1 border-gray-300 rounded p-3 ${disabledButtons.includes(service.id) ? 'border-indigo-700 bg-indigo-200'  : ''} `}>
                      <h6 className={`my-3 font-semibold ${disabledButtons.includes(service.id) ? 'text-indigo-700 text-xl' : 'text-metal-700'}`}>
                        {service.name}
                      </h6>
                      <p className={`my-3 ${disabledButtons.includes(service.id) ? 'text-indigo-700' : 'text-metal-700'}`}>
                        {service.description}
                      </p>
                    </div>

                    <div className="flex flex-row justify-end my-3">
                      <Button
                        size="xs"
                        key={service.id}
                        onClick={() => handleClick({id: service.id, name: service.name,category: service.category, description: service.description})}
                        //disabled={disabledButtons.includes(service.id)}
                        className={`border font-semibold border-indigo-700 bg-gray-100 hover:bg-indigo-800 ${
                          disabledButtons.includes(service.id)
                            ? "bg-indigo-900 text-gray-50 font-bold cursor-pointer hover:text-gray-50 hover:none before:content-['Selected'] duration-100 transition-all ease-in-out"
                            : "text-indigo-800 hover:text-gray-50 before:content-['Select'] duration-100 transition-all ease-in-out"
                        }`}

                      >
                        
                      </Button>
                    </div>
                  </div>
                ))}
              </Accordion.Content>
            </Accordion.Panel>
          );
        })}
      </Accordion>

    </>
  );
};

export default AccordionComponent;
