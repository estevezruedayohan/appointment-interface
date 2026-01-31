import { useState } from "react"

export function useForm(initialState){
  const [ formData, setFormData ] = useState(initialState)

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const resetForm = () => setFormData(initialState)

  return { formData, handleInputChange, resetForm }
}