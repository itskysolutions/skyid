export const ViewActivitesButton  = () => {

    const handleClick = () => {
        window.location.href = "/app/manageVSOs/viewActivities";
      };

    return (
        <div>
            <button onClick={handleClick} className="bg-gray-600 text-white px-4 py-2 rounded-md">
                View Activities
            </button>
        </div>
    )
}