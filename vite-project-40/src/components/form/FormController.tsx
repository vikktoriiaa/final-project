import { InputWithLabel } from "./FormView"
import { useState } from "react"
export const FormController = () => {
  const [formData, setFormData] = useState({
    name:'',
    email: '',
    password: '',
  })
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const key = e.target.name
    console.log(formData)
    setFormData({ ...formData, [key]: e.target.value })
    
  }
  return <InputWithLabel name={formData.name} email={formData.email} password={formData.password} onChange={handleOnChange}/>
}
 