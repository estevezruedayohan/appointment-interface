import { useState, useEffect } from "react";

export function useAppointments(){

  const [ appointmentList, setAppointmentList] = useState(() => {
    const localData = localStorage.getItem("appointments")
    return localData ? JSON.parse(localData) : []
  });

  useEffect(() => {
    if (appointmentList.length === 0) {

      const fetchData = async () => {
        try {
          const response = await fetch("./data.json");
          const data = await response.json();
          setAppointmentList(data);
        } catch (error) {
          console.error("Error loading the data: ", error);
        }
      };

      fetchData()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    localStorage.setItem("appointments", JSON.stringify(appointmentList))
  }, [appointmentList])

  const AddAppointment = (apt) => setAppointmentList(prev => [...prev, apt])
  const deleteAppointment = (aptId) => setAppointmentList( prev => prev.filter( a => a.id !== aptId))

  return { appointmentList, setAppointmentList, AddAppointment, deleteAppointment }

}