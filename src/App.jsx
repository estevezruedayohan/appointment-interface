import { useState, useEffect, useCallback } from "react";
import "./App.css";
import { BiCalendar } from "react-icons/bi";
import Search from "./components/Search";
import AddAppointment from "./components/AddAppointment";
import AppointmentInfo from "./components/AppointmentInfo";

export default function App() {
  const [appointmentList, setAppointmentList] = useState([]);

  const deleteAppointment = useCallback((appointmentId) => {
    setAppointmentList((prevList) =>
      prevList.filter((appointment) => appointment.id !== appointmentId),
    );
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./data1.json");
        const data = await response.json();
        setAppointmentList(data);
      } catch (error) {
        console.error("Error loading the data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="text-5xl mb-3">
        <BiCalendar className="inline-block text-red-400" />
        Your Appointments
      </h1>
      <AddAppointment />
      <Search />
      <ul className="divide-y divide-gray-200">
        {appointmentList.length === 0 ? (
          <p className="text-center py-10 text-gray-500 italic">
            There are no pending appointments. ¡Day Off! 🐨
          </p>
        ) : (
          appointmentList.map((appointment) => (
            <AppointmentInfo
              key={appointment.id}
              appointment={appointment}
              onDeleteAppointment={deleteAppointment}
            />
          ))
        )}
      </ul>
    </div>
  );
}
