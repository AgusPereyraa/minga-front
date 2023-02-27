import React from 'react'

export default function InputRegister({className, type, name, id, ref, value}) {
  return (
    <input className={className} type={type} name={name} id={id} ref={ref} value={value} />
  )
}
