import { NavLink } from "react-router-dom";
  const data = [
    {
      title: "Dashboard",
      link: "dashboard/chooseSpecialNumber",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M27.4138 13.5853L17.4138 3.58532C17.0387 3.21053 16.5302 3 16 3C15.4698 3 14.9613 3.21053 14.5863 3.58532L4.58626 13.5853C4.39964 13.7706 4.25171 13.991 4.15107 14.234C4.05042 14.4769 3.99908 14.7374 4.00001 15.0003V27.0003C4.00001 27.2655 4.10537 27.5199 4.29291 27.7074C4.48044 27.895 4.7348 28.0003 5.00001 28.0003H13C13.2652 28.0003 13.5196 27.895 13.7071 27.7074C13.8947 27.5199 14 27.2655 14 27.0003V20.0003H18V27.0003C18 27.2655 18.1054 27.5199 18.2929 27.7074C18.4804 27.895 18.7348 28.0003 19 28.0003H27C27.2652 28.0003 27.5196 27.895 27.7071 27.7074C27.8947 27.5199 28 27.2655 28 27.0003V15.0003C28.0009 14.7374 27.9496 14.4769 27.849 14.234C27.7483 13.991 27.6004 13.7706 27.4138 13.5853ZM26 26.0003H20V19.0003C20 18.7351 19.8947 18.4808 19.7071 18.2932C19.5196 18.1057 19.2652 18.0003 19 18.0003H13C12.7348 18.0003 12.4804 18.1057 12.2929 18.2932C12.1054 18.4808 12 18.7351 12 19.0003V26.0003H6.00001V15.0003L16 5.00032L26 15.0003V26.0003Z" fill="white"/>
        </svg>
      ),
    },
    {
        title: "Manage VSOs",
        link: "manageVSOs",
        icon: (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.01501 18.4749C8.0184 18.5427 8.00798 18.6104 7.98438 18.674C7.96077 18.7376 7.92448 18.7957 7.87771 18.8448C7.83094 18.8939 7.77466 18.933 7.71231 18.9596C7.64996 18.9863 7.58283 19 7.51501 18.9999H2.00001C1.77431 19.0003 1.55512 18.9243 1.37811 18.7842C1.20109 18.6442 1.07664 18.4484 1.02501 18.2287C0.992865 18.0783 0.994347 17.9227 1.02935 17.7729C1.06436 17.6232 1.13203 17.483 1.22751 17.3624C2.10977 16.1924 3.28038 15.2712 4.62501 14.6887C4.03467 14.1505 3.5819 13.4786 3.30461 12.7294C3.02732 11.9802 2.9336 11.1754 3.03128 10.3825C3.12897 9.58962 3.41522 8.83168 3.86606 8.17218C4.31691 7.51267 4.91922 6.97079 5.62255 6.59192C6.32588 6.21306 7.10976 6.00824 7.90852 5.99462C8.70729 5.981 9.49769 6.15898 10.2135 6.51365C10.9294 6.86832 11.5498 7.38935 12.0229 8.0331C12.4959 8.67686 12.8079 9.4246 12.9325 10.2137C12.9486 10.3198 12.9296 10.4283 12.8784 10.5226C12.8272 10.6169 12.7465 10.6919 12.6488 10.7362C11.2618 11.3774 10.0871 12.402 9.26339 13.689C8.4397 14.9761 8.00133 16.4719 8.00001 17.9999C8.00001 18.1599 8.00001 18.3174 8.01501 18.4749ZM30.765 17.3612C29.8848 16.1925 28.7169 15.2718 27.375 14.6887C27.9654 14.1505 28.4181 13.4786 28.6954 12.7294C28.9727 11.9802 29.0664 11.1754 28.9687 10.3825C28.8711 9.58962 28.5848 8.83168 28.134 8.17218C27.6831 7.51267 27.0808 6.97079 26.3775 6.59192C25.6741 6.21306 24.8903 6.00824 24.0915 5.99462C23.2927 5.981 22.5023 6.15898 21.7865 6.51365C21.0707 6.86832 20.4502 7.38935 19.9772 8.0331C19.5041 8.67686 19.1922 9.4246 19.0675 10.2137C19.0514 10.3198 19.0704 10.4283 19.1216 10.5226C19.1729 10.6169 19.2535 10.6919 19.3513 10.7362C20.7383 11.3774 21.9129 12.402 22.7366 13.689C23.5603 14.9761 23.9987 16.4719 24 17.9999C24 18.1599 24 18.3174 23.985 18.4749C23.9816 18.5427 23.992 18.6104 24.0156 18.674C24.0393 18.7376 24.0755 18.7957 24.1223 18.8448C24.1691 18.8939 24.2254 18.933 24.2877 18.9596C24.3501 18.9863 24.4172 19 24.485 18.9999H30C30.2257 19.0003 30.4449 18.9243 30.6219 18.7842C30.7989 18.6442 30.9234 18.4484 30.975 18.2287C31.0074 18.078 31.0059 17.9221 30.9706 17.772C30.9354 17.622 30.8673 17.4817 30.7713 17.3612H30.765ZM19.64 22.7587C20.6357 21.9962 21.3674 20.9408 21.7323 19.7409C22.0972 18.541 22.0769 17.257 21.6744 16.0692C21.2718 14.8814 20.5071 13.8497 19.4879 13.1189C18.4686 12.3882 17.246 11.9952 15.9919 11.9952C14.7377 11.9952 13.5151 12.3882 12.4959 13.1189C11.4766 13.8497 10.712 14.8814 10.3094 16.0692C9.90683 17.257 9.88657 18.541 10.2515 19.7409C10.6164 20.9408 11.3481 21.9962 12.3438 22.7587C10.5769 23.5242 9.10159 24.8353 8.13376 26.4999C8.04599 26.652 7.99978 26.8244 7.99979 27C7.9998 27.1756 8.04602 27.348 8.13382 27.5C8.22161 27.6521 8.34788 27.7783 8.49993 27.8661C8.65198 27.9538 8.82446 28 9.00001 27.9999H23C23.1756 28 23.348 27.9538 23.5001 27.8661C23.6521 27.7783 23.7784 27.6521 23.8662 27.5C23.954 27.348 24.0002 27.1756 24.0002 27C24.0002 26.8244 23.954 26.652 23.8663 26.4999C22.8963 24.8342 21.4183 23.523 19.6488 22.7587H19.64Z" fill="currentColor"/>
            </svg>  
        ),
    },
    {
      title: "Manage Numbers",
      link: "manageNumbers",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M26.7075 10.2925L19.7075 3.2925C19.6146 3.19967 19.5042 3.12605 19.3829 3.07586C19.2615 3.02568 19.1314 2.9999 19 3H7C6.46957 3 5.96086 3.21071 5.58579 3.58579C5.21071 3.96086 5 4.46957 5 5V27C5 27.5304 5.21071 28.0391 5.58579 28.4142C5.96086 28.7893 6.46957 29 7 29H25C25.5304 29 26.0391 28.7893 26.4142 28.4142C26.7893 28.0391 27 27.5304 27 27V11C27.0001 10.8686 26.9743 10.7385 26.9241 10.6172C26.8739 10.4958 26.8003 10.3854 26.7075 10.2925ZM23 24C23 24.2652 22.8946 24.5196 22.7071 24.7071C22.5196 24.8946 22.2652 25 22 25H20C19.8674 25 19.7402 24.9473 19.6464 24.8536C19.5527 24.7598 19.5 24.6326 19.5 24.5V20.0338C19.5035 19.7757 19.4091 19.5259 19.2359 19.3345C19.0626 19.1432 18.8234 19.0246 18.5662 19.0025C18.4295 18.9934 18.2923 19.0126 18.1632 19.0587C18.0341 19.1049 17.9159 19.1771 17.8159 19.2709C17.7159 19.3647 17.6363 19.478 17.5819 19.6039C17.5276 19.7297 17.4997 19.8654 17.5 20.0025V24.5025C17.5 24.6351 17.4473 24.7623 17.3536 24.8561C17.2598 24.9498 17.1326 25.0025 17 25.0025H15C14.8674 25.0025 14.7402 24.9498 14.6464 24.8561C14.5527 24.7623 14.5 24.6351 14.5 24.5025V20.0338C14.5035 19.7757 14.4091 19.5259 14.2359 19.3345C14.0626 19.1432 13.8234 19.0246 13.5662 19.0025C13.4295 18.9934 13.2923 19.0126 13.1632 19.0587C13.0341 19.1049 12.9159 19.1771 12.8159 19.2709C12.7159 19.3647 12.6363 19.478 12.5819 19.6039C12.5276 19.7297 12.4997 19.8654 12.5 20.0025V24.5025C12.5 24.6351 12.4473 24.7623 12.3536 24.8561C12.2598 24.9498 12.1326 25.0025 12 25.0025H10C9.73478 25.0025 9.48043 24.8971 9.29289 24.7096C9.10536 24.5221 9 24.2677 9 24.0025V17C9 16.7348 9.10536 16.4804 9.29289 16.2929C9.48043 16.1054 9.73478 16 10 16H22C22.2652 16 22.5196 16.1054 22.7071 16.2929C22.8946 16.4804 23 16.7348 23 17V24Z" fill="currentColor"/>
        </svg>
      ),
    },
    {
      title: "Add Ons",
      link: "addOns",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 5H7C6.46957 5 5.96086 5.21071 5.58579 5.58579C5.21071 5.96086 5 6.46957 5 7V13C5 13.5304 5.21071 14.0391 5.58579 14.4142C5.96086 14.7893 6.46957 15 7 15H13C13.5304 15 14.0391 14.7893 14.4142 14.4142C14.7893 14.0391 15 13.5304 15 13V7C15 6.46957 14.7893 5.96086 14.4142 5.58579C14.0391 5.21071 13.5304 5 13 5ZM13 13H7V7H13V13ZM25 5H19C18.4696 5 17.9609 5.21071 17.5858 5.58579C17.2107 5.96086 17 6.46957 17 7V13C17 13.5304 17.2107 14.0391 17.5858 14.4142C17.9609 14.7893 18.4696 15 19 15H25C25.5304 15 26.0391 14.7893 26.4142 14.4142C26.7893 14.0391 27 13.5304 27 13V7C27 6.46957 26.7893 5.96086 26.4142 5.58579C26.0391 5.21071 25.5304 5 25 5ZM25 13H19V7H25V13ZM13 17H7C6.46957 17 5.96086 17.2107 5.58579 17.5858C5.21071 17.9609 5 18.4696 5 19V25C5 25.5304 5.21071 26.0391 5.58579 26.4142C5.96086 26.7893 6.46957 27 7 27H13C13.5304 27 14.0391 26.7893 14.4142 26.4142C14.7893 26.0391 15 25.5304 15 25V19C15 18.4696 14.7893 17.9609 14.4142 17.5858C14.0391 17.2107 13.5304 17 13 17ZM13 25H7V19H13V25ZM25 17H19C18.4696 17 17.9609 17.2107 17.5858 17.5858C17.2107 17.9609 17 18.4696 17 19V25C17 25.5304 17.2107 26.0391 17.5858 26.4142C17.9609 26.7893 18.4696 27 19 27H25C25.5304 27 26.0391 26.7893 26.4142 26.4142C26.7893 26.0391 27 25.5304 27 25V19C27 18.4696 26.7893 17.9609 26.4142 17.5858C26.0391 17.2107 25.5304 17 25 17ZM25 25H19V19H25V25Z" fill="currentColor"/>
        </svg>
      ),
    },
    {
      title: "Wallet",
      link: "wallet",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M27 8H7C6.73478 8 6.48043 7.89464 6.29289 7.70711C6.10536 7.51957 6 7.26522 6 7C6 6.73478 6.10536 6.48043 6.29289 6.29289C6.48043 6.10536 6.73478 6 7 6H24C24.2652 6 24.5196 5.89464 24.7071 5.70711C24.8946 5.51957 25 5.26522 25 5C25 4.73478 24.8946 4.48043 24.7071 4.29289C24.5196 4.10536 24.2652 4 24 4H7C6.20435 4 5.44129 4.31607 4.87868 4.87868C4.31607 5.44129 4 6.20435 4 7V23C4 23.7956 4.31607 24.5587 4.87868 25.1213C5.44129 25.6839 6.20435 26 7 26H27C27.5304 26 28.0391 25.7893 28.4142 25.4142C28.7893 25.0391 29 24.5304 29 24V10C29 9.46957 28.7893 8.96086 28.4142 8.58579C28.0391 8.21071 27.5304 8 27 8ZM22.5 18C22.2033 18 21.9133 17.912 21.6666 17.7472C21.42 17.5824 21.2277 17.3481 21.1142 17.074C21.0007 16.7999 20.9709 16.4983 21.0288 16.2074C21.0867 15.9164 21.2296 15.6491 21.4393 15.4393C21.6491 15.2296 21.9164 15.0867 22.2074 15.0288C22.4983 14.9709 22.7999 15.0006 23.074 15.1142C23.3481 15.2277 23.5824 15.42 23.7472 15.6666C23.912 15.9133 24 16.2033 24 16.5C24 16.8978 23.842 17.2794 23.5607 17.5607C23.2794 17.842 22.8978 18 22.5 18Z" fill="currentColor"/>
        </svg>
      ),
    },
  
  ];

export const CPDashboardSideMenu = () => {
  return (
    <div className="w-[16.6%] flex-col flex justify-between fixed top-0 h-screen" style={{paddingTop:"5%"}}>
      <div className="w-full flex-col gap-1 flex mt-8">
        {data.map((item, index) => (
          <div key={index} className="w-full">
            <NavLink
            onClick={() =>console.log("testing")}
              to={item.link}
              style={({ isActive }) => {
                return {
                  color: isActive ? "#D92027" : "#FFFFFF",
                  background: isActive ? "#FFFFFF" : "#D92027",
                };
              }}
              className={`cursor-pointer flex py-3 px-3 items-center gap-3 no-underline bg-slate-300`}
            >
              <div
                className="relative">
                {item.icon}
              </div>
              {item.title}
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

