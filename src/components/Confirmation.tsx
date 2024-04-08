import "../App.css";
import { Card} from "keep-react";

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
  data?: Service;
  shiftData?: ShiftData;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ConfirmationComponent = ({infoFromSteps} : {infoFromSteps: CombinedData}) => {

  
  


  return (
    <section className="flex flex-col w-full py-5 md:items-center">

        <Card className="max-w-md">
          <Card.Content>
            <Card.Title className="text-xl font-bold">
              Service: {infoFromSteps?.data?.name}
            </Card.Title>
            <Card.Description className="text-lg font-semibold">
              Date: {infoFromSteps?.shiftData?.date} - {infoFromSteps?.shiftData?.time}
            </Card.Description>
          </Card.Content>
        </Card>

    </section>
  );
};

export default ConfirmationComponent;
