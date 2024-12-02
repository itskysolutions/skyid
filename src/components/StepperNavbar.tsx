import { useLocation, useNavigate } from "react-router-dom";

const data = [
  { title: "Choose Special Number", link: "chooseSpecialNumber" },
  { title: "Number Mapping", link: "numberMapping" },
  { title: "Add Ons", link: "dashboardAddOns" },
  { title: "Checkout", link: "checkOut" },
  { title: "KYC", link: "KYC" },
  { title: "KYC", link: "KYCForBusiness" },
  { title: "Completed", link: "completed" },
];

const StepperNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const currentStep = data.findIndex((step) => location.pathname.includes(step.link));

  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-4 space-y-4 md:space-y-0">
      {data.map((step, index) => {
        const isCompleted = currentStep > index;
        const isActive = currentStep === index;

        return (
          <div
            key={step.link}
            className="flex flex-col md:flex-row items-center gap-2 cursor-pointer w-full md:w-auto"
            onClick={() => navigate(`/app/buyNumber/${step.link}`)}
          >
            {/* Step Indicator */}
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full font-bold border-2 ${
                isCompleted
                  ? "bg-white border-[#12A53E] text-[#12A53E]" // Completed step with tick
                  : isActive
                  ? "bg-[#12A53E] text-white border-[#12A53E]" // Active step
                  : "bg-gray-300 text-gray-500 border-gray-300" // Inactive step
              }`}
            >
              {isCompleted ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                index + 1
              )}
            </div>

            {/* Step Title */}
            <span
              className={`text-sm ${
                isCompleted || isActive
                  ? "text-[#12A53E] font-semibold"
                  : "text-gray-500"
              }`}
            >
              {step.title}
            </span>

            {/* Divider Line */}
            {index < data.length - 1 && (
              <div
                className={`hidden md:block h-1 w-10 ${
                  isCompleted ? "bg-[#12A53E]" : "bg-gray-300"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default StepperNavbar;
