import StepperNavbar from "../components/StepperNavbar";
import { Completed } from "../components/Completed";

export const Dashboard = () => {

  return (
    <div  style={{ minHeight: ''}}>
      <div style={{ marginBottom: '3%', paddingTop:"3%" , marginLeft:"5%"}}>
        <StepperNavbar/>
      </div>

      <div><Completed/></div>
    </div>
  );
};
