import { FormView } from "./FormView"
import { useState } from "react"
export const FormController = () => {
  const [formData, setFormData] = useState({
    name:'',
    email: '',
    password: '',
  })
  const [submit, setSubmit] = useState(false)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    setSubmit(!submit); 
  };
  
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const key = e.target.name
    setFormData({ ...formData, [key]: e.target.value })
    
  }
   
  const handleGoHome = () => {
    setSubmit(false);
    setFormData({name:'', email: '', password: '' });
  }
  return <FormView name={formData.name} email={formData.email} password={formData.password} onChange={handleOnChange} submit={submit} handleGoHome={handleGoHome} handleSubmit={handleSubmit}/>
}
 