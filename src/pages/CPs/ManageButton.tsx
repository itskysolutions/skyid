import { useState } from 'react';
export const ManageButton = () => {

    const [manageButton, setManageButton] = useState(false);

    const manageButtonPopup = () => {
        setManageButton(!manageButton);
      };

    return(
        <div>
            <button onClick={manageButtonPopup} className="bg-blue-600 text-white px-2 py-2 rounded-md">
                Manage
            </button>
            {manageButton && (
                 <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative overflow-y-auto max-h-[90vh]">
                        <button onClick={manageButtonPopup} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
                            ✕
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}