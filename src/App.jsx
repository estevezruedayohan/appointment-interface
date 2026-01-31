import "./App.css";
import { BiCalendar } from "react-icons/bi";
import Search from "./components/Search";
import AddAptComponent from "./components/AddAptComponent";
import AppointmentInfo from "./components/AppointmentInfo";
import { useAppointments } from "./hooks/useAppointments";

export default function App() {
  const {
    appointmentList,
    query,
    setQuery,
    sortBy,
    setSortBy,
    orderBy,
    setOrderBy,
    addAppointment,
    deleteAppointment,
  } = useAppointments();

  return (
    <div className="w-full max-w-7xl mx-auto mt-3 p-8 text-center font-thin min-h-dvh pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]">
      <h1 className="text-5xl mb-3">
        <BiCalendar className="inline-block text-red-400 align-top" />
        Your Appointments
      </h1>
      <AddAptComponent onSendAppointment={addAppointment} />
      <Search
        searchTerm={query}
        onQueryChange={setQuery}
        sortBy={sortBy}
        onSortByChange={setSortBy}
        orderBy={orderBy}
        onOrderByChange={setOrderBy}
      />
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
