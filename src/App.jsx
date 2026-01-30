import { useState, useEffect, useCallback, useMemo } from "react";
import "./App.css";
import { BiCalendar } from "react-icons/bi";
import Search from "./components/Search";
import AddAppointment from "./components/AddAppointment";
import AppointmentInfo from "./components/AppointmentInfo";
import { filterAppointments } from "./utils/filterTools";

export default function App() {
  const [appointmentList, setAppointmentList] = useState([]);
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("petName");
  const [orderBy, setOrderBy] = useState("asc");

  const filteredAppointments = useMemo(() => {
    return filterAppointments(appointmentList, query, sortBy, orderBy);
  }, [appointmentList, query, sortBy, orderBy]);

  const deleteAppointment = useCallback((appointmentId) => {
    setAppointmentList((prevList) =>
      prevList.filter((appointment) => appointment.id !== appointmentId),
    );
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./data.json");
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
      <AddAppointment
        onSendAppointment={(myAppointment) =>
          setAppointmentList([...appointmentList, myAppointment])
        }
        lastId={appointmentList.reduce(
          (max, item) => (Number(item.id) > max ? Number(item.id) : max),
          0,
        )}
      />
      <Search
        searchTerm={query}
        onQueryChange={(myQuery) => setQuery(myQuery)}
        sortBy={sortBy}
        onSortByChange={(mySort) => setSortBy(mySort)}
        orderBy={orderBy}
        onOrderByChange={(myOrder) => setOrderBy(myOrder)}
      />
      <ul className="divide-y divide-gray-200">
        {appointmentList.length === 0 ? (
          <p className="text-center py-10 text-gray-500 italic">
            There are no pending appointments. ¡Day Off! 🐨
          </p>
        ) : (
          filteredAppointments.map((appointment) => (
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
