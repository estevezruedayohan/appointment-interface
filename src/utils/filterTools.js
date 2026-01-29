export const filterAppointments = (list, searchTerm, sortBy, orderBy) => {
  
  return list.filter((item) => 
    item.petName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.ownerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.aptNotes.toLowerCase().includes(searchTerm.toLowerCase())
  ).sort((a, b) => {
    let order = orderBy === "asc" ? 1 : -1

    let aValue = a[sortBy]
    let bValue = b[sortBy]

    if(sortBy === 'aptDate'){
      aValue = new Date(aValue).getTime()
      bValue = new Date(bValue).getTime()
    } else{
      aValue = aValue.toLowerCase()
      bValue = bValue.toLowerCase()
    }

    return aValue < bValue ? -1 * order : 1 * order
  })
}
