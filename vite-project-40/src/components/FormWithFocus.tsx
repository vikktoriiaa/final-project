import { useState, useRef } from "react";

export const FormWithFocus = () => {
const [currentField, setcurrentField] = useState(0);
const nameRef = useRef<HTMLInputElement>(null);
const emailRef = useRef<HTMLInputElement> (null);
const phoneRef = useRef<HTMLInputElement>(null);
const refState = [nameRef, emailRef, phoneRef];
const focusNext = () => {
  setcurrentField(currentField === refState.length - 1 ? 0 : currentField + 1);
  refState[currentField].current?.focus();
}
  return (<div className="flex flex-col gap-4 p-5">
    <input ref= { nameRef } placeholder='Name' />
<input ref={emailRef} placeholder='Email' />
<input ref={phoneRef} placeholder='Phone' />
<button onClick={focusNext}>Следующее поле</button>
</ div>)
}