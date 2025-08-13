import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Title } from "../Title"
type Props = {
  name: string,
  email: string,
  password: string,
  submit: boolean,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  handleGoHome: () => void,
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

export function FormView({ name, email, password, onChange, submit, handleGoHome, handleSubmit }: Props) {
    if (submit) {
    return <>
      <Title text="Success" />
      <div className="flex flex-col gap-2 mx-auto w-[550px] my-0 p-6 border-2 border-gray-300">
        <p>Email confirmed</p>
        <p>Your registration is now completed.</p>
        <button type='submit' className="bg-[#2436a7] text-white p-2 rounded-2xl" onClick={handleGoHome}>Go to home</button>
      </div>
    </>
  }
  return (
    <form onSubmit={handleSubmit} className="grid w-full max-w-sm items-center gap-3 mx-auto my-0 border-1 border-gray-400 p-4 rounded-2xl">
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


       
