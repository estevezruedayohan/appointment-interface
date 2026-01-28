export const filterAppointments = (list, searchTerm) => {
  
  return list.filter((item) => 
    item.petName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.ownerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.aptNotes.toLowerCase().includes(searchTerm.toLowerCase())
  )
}
