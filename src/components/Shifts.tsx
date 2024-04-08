import "../App.css";

import { Shifts } from "../services/shiftsData";
import { Tag, Badge, Card } from "keep-react";
import { useState} from "react";

type Shift = {
  date: string;
  serviceId: number;
  availableTimeslots: string[];
};

type ShiftSelected ={
  date: string;
  id: number;
  time: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ShiftsComponent = ({handleInfoFromSteps}:{handleInfoFromSteps : any}) => {

  const [disabledTags, setDisabledTags] = useState<number[]>([]);

  const handleClick = (shiftData: ShiftSelected) => {

    //LOGIC FOR SELECTED TAG DISABLED-ACTIVE
    
    if (disabledTags.includes(shiftData.id)) {
      setDisabledTags((prevDisabledTags) =>
        prevDisabledTags.filter((id) => id !== shiftData.id)
      );
    } else if (!disabledTags.includes(shiftData.id) && disabledTags.length < 1) {
      setDisabledTags([...disabledTags, shiftData.id]);
    }
    //LOGIC FOR SELECTED TAG DISABLED-ACTIVE

-
    handleInfoFromSteps({shiftData})
  };


  return (
/*     <article className="flex flex-col m-auto py-5">
      <div className="flex flex-col items-center"> */
      <section className="flex flex-col border-0 border-gray-200 rounded p-3 w-full">
      <Card className="max-w-md flex flex-col m-auto my-5">
        {Shifts.map((shift: Shift) => { 
          return (
            <Card.Content className="flex flex-col gap-3" key={shift.serviceId}>
              <Card.Title>Próximos turnos disponibles</Card.Title>
              <Card.Description>
                <Badge color="primary" className="text-indigo-800 border-1 font-semibold border-indigo-800 bg-gray-100">{shift.date}</Badge>
              </Card.Description>
              <div className="flex flex-row flex-wrap justify-center">
                {shift.availableTimeslots.map((shiftAvaible, index) => {
                  return (
                    <Tag
                      key={index}
                      onClick={() => handleClick({id:index, date:shift.date, time:shiftAvaible})}
                      disabled={disabledTags.includes(index)}
                      className={`m-2 w-16 font-semibold ${
                        disabledTags.includes(index)
                          ? "bg-indigo-700 text-gray-50 cursor-pointer"
                          : ""
                      }`}
                    >
                      {shiftAvaible}
                    </Tag>
                  );
                })}
              </div>
            </Card.Content>
          );
        })}
      </Card>
      </section>
/*       </div>

    </article> */
  );
};

export default ShiftsComponent;
