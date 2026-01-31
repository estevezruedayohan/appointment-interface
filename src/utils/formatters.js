export const formatDate = (dateString) =>{

  const date = new Date(dateString)
  
  return new Intl.DateTimeFormat('en-EN', {
    year: "numeric",
      day: "numeric",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
  }).format(date)
}