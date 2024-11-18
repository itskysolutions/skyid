import React, { useState } from 'react';

type Option = {
  id: string;
  label: string;
  parentId?: string;
  children: Option[];
};

export const NestedDropdown = ({ options, onFilterChange }: { options: Option[],   onFilterChange: (selectedFilters: { [key: string]: boolean }) => void;}) => {
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({});
  const [openDropdowns, setOpenDropdowns] = useState<{ [key: string]: boolean }>({});
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>, optionId: string) => {
    const isChecked = event.target.checked;
    const updatedCheckedItems = { ...checkedItems, [optionId]: isChecked };
    setCheckedItems(updatedCheckedItems);
    onFilterChange(
      Object.keys(updatedCheckedItems).reduce((result, key) => {
        if (updatedCheckedItems[key]) {
          result[key] = true;
        }
        return result;
      }, {} as { [key: string]: boolean })
    );
  };
  

  const toggleDropdown = (id: string) => {
    setOpenDropdowns((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const renderOptions = (options: Option[]) => {
    return options.map((option) => (
      <div key={option.id} style={{ paddingLeft: option.parentId ? '20px' : '0' }}>
        {!option.children.length ? (
         <label className="custom-checkbox">
            <input
            type="checkbox"
            checked={checkedItems[option.id] || false}
            onChange={(e) => handleCheckboxChange(e, option.id)}
            />
            <p>{option.label}</p>
            <style>{`.custom-checkbox {
                display: flex;
                align-items: center;
                gap: 10px; 
                font-size: 18px; 
                }

                .custom-checkbox input[type="checkbox"] {
                appearance: none; 
                width: 18px;
                height: 18px;
                border: 2px solid #007bff; 
                border-radius: 4px; 
                outline: none;
                cursor: pointer;
                background-color: white; 
                transition: all 0.2s ease;
                }

                .custom-checkbox input[type="checkbox"]:checked {
                background-color: #5A9CFF; 
                border-color: #5A9CFF; 
                }

                .custom-checkbox input[type="checkbox"]:checked::after {
                color: white;
                font-size: 14px;
                display: flex;
                justify-content: center;
                align-items: center;
                }

                .custom-checkbox p {
                margin: 0;
                font-size: 14px;
                color: #333; /* Adjust text color */
                }
            `}</style>
       </label>
        ) : (
          <>
           <div style={{display: 'flex', alignItems: 'center',}}>
            <button onClick={() => toggleDropdown(option.id)} style={{justifyContent: 'space-between', alignItems: 'center', display: 'flex'}}>
                {option.label}
                {/* SVG toggles for individual dropdowns */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    style={{ marginLeft: '8px' }}
                    className="bi bi-chevron-down"
                    viewBox="0 0 16 16"
                >
                    {openDropdowns[option.id] ? (
                    <path
                        fillRule="evenodd"
                        d="M1.646 11.354a.5.5 0 0 0 .708 0L8 5.707l5.646 5.647a.5.5 0 0 0 .708-.708l-6-6a.5.5 0 0 0-.708 0l-6 6a.5.5 0 0 0 0 .708z"
                    />
                    ) : (
                    <path
                        fillRule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                    )}
                </svg>
                </button>
           </div>
            {openDropdowns[option.id] && (
              <div style={{ marginLeft: '10px' }}>{renderOptions(option.children)}</div>
            )}
          </>
        )}
      </div>
    ));
  };

  return (
    <div>
      <div
        style={{
          border: '1px solid #00000033',
          backgroundColor: 'white',
          color: '#000000CC',
          height: '45px',
          width: '265px',
          display: 'flex',
          alignItems: 'center',
          borderRadius: '5px',
        }}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0 10px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          Status
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-chevron-down"
            viewBox="0 0 16 16"
          >
            {isOpen ? (
              <path
                fillRule="evenodd"
                d="M1.646 11.354a.5.5 0 0 0 .708 0L8 5.707l5.646 5.647a.5.5 0 0 0 .708-.708l-6-6a.5.5 0 0 0-.708 0l-6 6a.5.5 0 0 0 0 .708z"
              />
            ) : (
              <path
                fillRule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              />
            )}
          </svg>
        </button>
      </div>
      {isOpen && (
        <div style={{ marginTop: '10px', padding: '10px', border: '1px solid #ccc' }}>
          {renderOptions(options)}
        </div>
      )}
    </div>
  );
};
