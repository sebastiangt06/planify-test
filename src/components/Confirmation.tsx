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
  data: Service;
  shiftData?: ShiftData;
}




export const ConfirmationComponent = ({infoFromSteps} : {infoFromSteps: CombinedData}) => {

  console.log('desde confirmation' , infoFromSteps)
  


  return (
    <section className="flex flex-col w-96 m-auto justify-center py-5">
      <div>
        <Card className="max-w-md">
          <Card.Content>
            <Card.Title className="text-xl font-bold">
              Servicio: {infoFromSteps?.data?.name}
            </Card.Title>
            <Card.Description className="text-lg font-semibold">
              Fecha: {infoFromSteps?.shiftData?.date} - {infoFromSteps?.shiftData?.time}
            </Card.Description>
          </Card.Content>
        </Card>
      </div>

    </section>
  );
};

export default ConfirmationComponent;
