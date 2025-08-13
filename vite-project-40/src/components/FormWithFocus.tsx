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
  return (<div>
    <input ref= { nameRef } placeholder='имя' />
<input ref={emailRef} placeholder='Email' />
<input ref={phoneRef} placeholder='Телефон' />
<button onClick={focusNext}>Следующее поле</button>
</ div>)
}