import Card from "react-bootstrap/Card";
import CustomButton from "./CustomButton";

interface SuccessProps {
  label: string; 
  paragraph: string; 
  buttonLabel: string; 
  buttonLink?: string; 
}

export const SuccessComponent = ({
  label,
  paragraph,
  buttonLabel,
  buttonLink,
}: SuccessProps) => {
  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center bg-opacity-50">
        <div className="bg-[#E6FFEB] rounded-lg shadow-lg p-6 max-w-md w-full relative">
            <Card className='bg-[#E6FFEB]' style={{border:"none"}}>
            <Card.Body className=" bg-[#E6FFEB]">
              <div className="flex justify-content-center mb-5">
                <svg
                  width="149.5"
                  height="149.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.9299 13.4587C10.9299 13.4587 10.9327 13.4574 10.9373 13.4567C10.9321 13.4587 10.9299 13.4587 10.9299 13.4587Z"
                    fill="#12A53E"
                  ></path>
                  <path
                    d="M10.9644 13.4587C10.9644 13.4587 10.9616 13.4574 10.957 13.4567C10.9601 13.4579 10.9633 13.4587 10.9633 13.4587L10.9644 13.4587Z"
                    fill="#12A53E"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.2002 11.9997C2.2002 6.58732 6.5878 2.19971 12.0002 2.19971C17.4126 2.19971 21.8002 6.58732 21.8002 11.9997C21.8002 17.4121 17.4126 21.7997 12.0002 21.7997C6.5878 21.7997 2.2002 17.4121 2.2002 11.9997ZM17.2364 9.51246C17.5488 9.20004 17.5488 8.69351 17.2364 8.38109C16.9239 8.06867 16.4174 8.06867 16.105 8.38109L11.7957 12.6904C11.4464 13.0397 11.2401 13.2436 11.0743 13.3701C11.0078 13.4208 10.9677 13.4433 10.9472 13.4526C10.9266 13.4433 10.8865 13.4208 10.82 13.3701C10.6542 13.2436 10.4479 13.0397 10.0986 12.6904L8.56593 11.1577C8.25351 10.8453 7.74698 10.8453 7.43456 11.1577C7.12214 11.4701 7.12214 11.9767 7.43456 12.2891L9.00037 13.8549C9.30504 14.1597 9.58777 14.4425 9.84945 14.6421C10.1391 14.8631 10.4948 15.0561 10.9472 15.0561C11.3995 15.0561 11.7552 14.8631 12.0449 14.6421C12.3065 14.4424 12.5892 14.1597 12.8939 13.8549L17.2364 9.51246Z"
                    fill="#12A53E"
                  ></path>
                </svg>
              </div>
              <div className="flex justify-content-center mb-1">
                <h5>{label}</h5>
              </div>
              <div className="flex justify-content-center text-center">
                <p>{paragraph}</p>
              </div>
            </Card.Body>
          </Card>
          <div className="mt-[40px]">
            <a href={buttonLink} className="no-underline">
              <CustomButton
                name={buttonLabel}
                backgroundColor="bg-[#277CFA]"
                textColor="text-[#ffffff]"
                style="w-[100%]"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
