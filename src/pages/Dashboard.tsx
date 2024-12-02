import { CompleteRegistration } from "../components/CompleteRegistration";

const Card = ({ title, value }: { title: string; value: string | number }) => {
  return (
    <div className="p-3 w-full max-w-[290px] border-2 border-[#D92027] rounded-lg flex flex-col" style={{ height: "200px" }}>
      <p><b>{title}</b></p>
      <div className="mt-auto">
        <h1>{value}</h1>
      </div>
    </div>
  );
};

export const Dashboard = () => {

  const cards = [
    { title: "Sky ID Numbers", value: 0 },
    { title: "Mapped Lines", value: 0 },
    { title: "Add Ons", value: 0 },
    // { title: "VSOs", value: 0 },
    // { title: "Customers", value: 0 },
    // { title: "Channel Partners", value: 0 },
    // { title: "Blocked Accounts", value: 0 },
    // { title: "Pending Requests", value: 0 },
    // { title: "Completed Requests", value: 0 },
    // { title: "All-Time Requests", value: 0 },
  ];

  return (
    <div>
      <div className="pt-2"><CompleteRegistration/></div>
        <div style={{paddingTop:"5%"}}>
            <h2><b>Dashboard</b></h2>
        </div>
        <div>
          <div className="flex gap-4 mt-5 text-[#00000099]">
            {cards.map((card, index) => (
              <Card key={index} title={card.title} value={card.value} />
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-[15%]">
          <p>Unlock Your Sky ID - Get your Identity, and availability</p>
        </div>
        <div className="flex justify-center mb-5"><a href="/app/buyNumber/chooseSpecialNumber"><button className="bg-[#12A53E] text-white p-2 ps-5 pe-5 rounded-md">Buy Sky ID Number</button></a></div>
    </div>
  );
};
