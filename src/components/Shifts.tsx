import "../App.css";

import { Shifts } from "../services/shiftsData";
import { Tag, Badge, Card } from "keep-react";
import { useState } from "react";

type Shift = {
  date: string;
  serviceId: number;
  availableTimeslots: string[];
};

type ShiftSelected = {
  date: string;
  id: number;
  time: string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ShiftsComponent = ({ handleInfoFromSteps }: any) => {
  const [disabledTags, setDisabledTags] = useState<number[]>([]);

  const handleClick = (shiftData: ShiftSelected) => {
    //LOGIC FOR SELECTED TAG DISABLED-ACTIVE

    if (disabledTags.includes(shiftData.id)) {
      setDisabledTags((prevDisabledTags) =>
        prevDisabledTags.filter((id) => id !== shiftData.id)
      );
    } else if (
      !disabledTags.includes(shiftData.id) &&
      disabledTags.length < 1
    ) {
      setDisabledTags([...disabledTags, shiftData.id]);
    }
    //LOGIC FOR SELECTED TAG DISABLED-ACTIVE
    if (disabledTags.includes(shiftData.id) || disabledTags.length < 1) {
      handleInfoFromSteps({ shiftData });
    } else {
      null;
    }
  };

  return (
    <Card className="max-w-md flex flex-col m-auto my-5 w-full">
      {Shifts.map((shift: Shift) => {
        return (
          <Card.Content className="flex flex-col gap-3" key={shift.serviceId}>
            <Card.Title>Next available shifts</Card.Title>
            <Card.Description>
              <Badge
                color="primary"
                className="text-indigo-800 border-1 font-semibold border-indigo-800 bg-gray-100"
              >
                {shift.date}
              </Badge>
            </Card.Description>
            <div className="flex flex-row flex-wrap justify-center">
              {shift.availableTimeslots.map((shiftAvaible, index) => {
                return (
                  <Tag
                    key={index}
                    onClick={() => 
                        handleClick({
                          id: index,
                          date: shift.date,
                          time: shiftAvaible,
                        })
                    }
                    disabled={disabledTags.length > 0 ?  !disabledTags.includes(index) : disabledTags.includes(index)}
                    className={`m-2 w-16 font-semibold ${
                      disabledTags.includes(index)
                        ? "bg-indigo-700 text-gray-50"
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
  );
};

export default ShiftsComponent;
