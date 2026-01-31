import { BiTrash } from "react-icons/bi";
import { memo } from "react";
import { formatDate } from "../utils/formatters";

const AppointmentInfo = memo(({ appointment, onDeleteAppointment }) => {
  const handleDelete = () => {
    if (
      window.confirm(
        `Are you sure you want to Delete the ${appointment.petName} appointment?`,
      )
    ) {
      onDeleteAppointment(appointment.id);
    }
  };

  const formattedDate = formatDate(appointment.aptDate);

  return (
    <li className="px-3 py-3 flex items-start">
      <button
        onClick={handleDelete}
        type="button"
        className="p-1.5 mr-1.5 mt-1 rounded text-white bg-red-500 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        <BiTrash />
      </button>
      <div className="grow">
        <div className="flex items-center">
          <span className="flex-none font-medium text-2xl text-blue-500">
            {appointment.petName}
          </span>
          <span className="grow text-right"> {formattedDate} </span>
        </div>
        <div>
          <b className="font-bold text-blue-500">Owner:</b>{" "}
          {appointment.ownerName}
        </div>
        <div className="leading-tight"> {appointment.aptNotes}</div>
      </div>
    </li>
  );
});

export default AppointmentInfo;
