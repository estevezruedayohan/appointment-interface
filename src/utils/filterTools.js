export const filterAppointments = (list, searchTerm, sortBy, orderBy) => {

  const filtered = list.filter((item) => {
    return (
      item.petName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.ownerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.aptNotes.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })

  return filtered.sort((a, b) => {
    const order = orderBy === "asc" ? 1 : -1

    const formatValue = (obj) => {
      const val = obj[sortBy]
      if (sortBy === "aptDate") return new Date(val).getTime()
      return val.toLowerCase()
    }

    const aVal = formatValue(a)
    const bVal = formatValue(b)

    return aVal < bVal ? -1 * order : 1 * order
  })
}
