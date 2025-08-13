// import React, { useState } from "react"
// import { Title } from "../Title";

// export const FormView = () => {

//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   })
//   const [submit, setSubmit] = useState(false)

//    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log(formData);
//     setSubmit(!submit); 
//   };
  
//   const handleGoHome = () => {
//     setSubmit(false);
//     setFormData({ email: '', password: '' });
//   }
//   if (submit) {
//     return <>
//       <Title text="Success" />
//       <div className="flex flex-col gap-2 mx-auto w-[550px] my-0 p-6 border-2 border-gray-300">
//         <p>Email confirmed</p>
//         <p>Your registration is now completed.</p>
//         <button type='submit' className="bg-[#2436a7] text-white p-2 rounded-2xl" onClick={handleGoHome}>Go to home</button>
//       </div>
//     </>
//   }
//   return (
//     <>
//     <Title text="Sign In" />
//     <form onSubmit={handleSubmit} className="flex flex-col gap-2 mx-auto w-[550px] my-0 p-6 border-2 border-gray-300">
//         <label
//           htmlFor="email"
//           className="text-xl"
//         >
//           Email
//         </label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           className="border-2 border-gray-500 p-2 rounded-2xl"
//           value={formData.email}
//           onChange={(e) => setFormData({...formData, email: e.target.value})}
//         />
//         <label
//           htmlFor="password"
//           className="text-xl"
//         >
//           Password
//         </label>
//         <input
//           type="password"
//           id="password"
//           name="password"
//           className="border-2 border-gray-500 p-2 rounded-2xl"
//           value={formData.password}
//           onChange={(e) => setFormData({...formData, password: e.target.value})}
//         />
//         <p className="text-gray-500 text-sm">Forgot password?</p>
//         <button
//           type='submit'
//           className="bg-[#2436a7] text-white p-2 rounded-2xl">Sign In</button>
//         <div className="flex gap-2">
//           <p>Don't have an account?</p>
//           <span className="text-[#2436a7] cursor-pointer">Sign Up</span>
//         </div>
//       </form>
//       </>
//   )
// }

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
type Props = {
  name: string,
  email: string,
  password: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export function InputWithLabel({name, email, password, onChange}: Props) {
  return (
    <form  className="grid w-full max-w-sm items-center gap-3 mx-auto my-0 border-1 border-gray-400 p-4 rounded-2xl">
      <Label htmlFor="name">Name</Label>
      <Input type="text" id="name" placeholder="Name" value={name} onChange={onChange} name='name' />
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" value={email} onChange={onChange} name='email' />
      <Label htmlFor="password">Password</Label>
      <Input type="password" id="password" placeholder="Password" value={password} onChange={onChange} name='password' />
      <Button type="submit">Submit</Button>
    </form>
  )
}


       
