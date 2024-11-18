import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReactDOM from "react-dom";

export const LogOut = () => {
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate(); // For redirecting

  useEffect(() => {
    // Automatically trigger the confirmation popup when the component mounts
    setShowConfirm(true);
  }, []);

  const handleLogout = () => {
    // Perform logout logic, e.g., clearing session or tokens
    console.log("User logged out");
    setShowConfirm(false); // Close the popup

    // Redirect to another page (e.g., home page)
    navigate("/signin");
  };

  const handleCancel = () => {
    setShowConfirm(false);
    navigate(-1); // Go back to the previous page
  };

  return (
    <div>
      {showConfirm &&
        ReactDOM.createPortal(
          <div className="popup-overlay">
            <div className="popup-content">
              <p><b>Are you sure you want to <br/>log out of your Dashboard?</b></p>
              <div className="popup-actions">
                <button onClick={handleCancel} className="cancel-btn">
                  No
                </button>
                <button onClick={handleLogout} className="confirm-btn">
                  Yes
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
        <style>{`
          .popup-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
          }

          .popup-content {
            background: white;
            padding: 20px;
            border-radius: 10px;
            width: 556px;
            height: 214px
            border-radius: 10px;
            text-align: center;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          .popup-actions {
            margin-top: 20px;
          }

          .confirm-btn,
          .cancel-btn {
            padding: 10px 15px;
            margin: 0 10px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            width: 226px;
            height: 50px;
          }

          .confirm-btn {
            background: #12A53E;
            color: white;
          }

          .cancel-btn {
            background: #FFFFFF;
            color: #D92027;
            border: 2px solid #D92027;
          }

        `}</style>
    </div>
  );
};
