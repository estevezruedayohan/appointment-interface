import { useState, useEffect, useMemo } from "react";
import { filterAppointments } from "../utils/filterTools"

export function useAppointments(){

  const [ appointmentList, setAppointmentList] = useState(() => {
    try {
      const localData = localStorage.getItem("appointments")
      
      return localData ? JSON.parse(localData) : []
    } catch {
      return []
    }
  });

  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("petName");
  const [orderBy, setOrderBy] = useState("asc");
  
  const filteredAppointments = useMemo(() => {
    return filterAppointments(appointmentList || [], query, sortBy, orderBy);
  }, [appointmentList, query, sortBy, orderBy]);

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

  const addAppointment = (apt) => {
    const nextId = appointmentList.reduce(
      (max, item) => (Number(item.id) > max ? Number(item.id) : max),
          0,
    ) + 1;
    
    const newApt = {...apt, id: nextId} 

    setAppointmentList(prev => [...prev, newApt])
  }
  
  const deleteAppointment = (aptId) => setAppointmentList( prev => prev.filter( a => a.id !== aptId))
 
  return { appointmentList: filteredAppointments, query, setQuery, sortBy, setSortBy, orderBy, setOrderBy, setAppointmentList, addAppointment, deleteAppointment }

}