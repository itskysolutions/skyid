export const ViewActivitesBusiness  = () => {

    const handleClick = () => {
        window.location.href = "/app/manageBusinesses/viewActivitiesBusiness";
      };

    return (
        <div>
            <button onClick={handleClick} className="bg-gray-600 text-white px-1 py-2 rounded-md">
                View Activities
            </button>
        </div>
    )
}