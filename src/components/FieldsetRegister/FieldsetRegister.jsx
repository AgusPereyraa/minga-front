import React from 'react'
import './fieldsetRegister.css'
import LegendRegister from '../LegendRegister/LegendRegister'
import InputRegister from '../InputRegister/InputRegister'
import Image from '../Image/Image'


export default function FieldsetRegister({id, legendText, inputType,inputName, inputId, srcImg, altImg}) {
  return (
    <fieldset id={id}>
        <LegendRegister text={legendText} />
        <InputRegister type={inputType} name={inputName} id={inputId} />
        <Image src={srcImg} alt={altImg} />
    </fieldset>
  )
}
