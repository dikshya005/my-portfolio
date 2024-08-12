import React from 'react'
import { LiaAddressBook } from "react-icons/lia";
import { FaGithubAlt } from "react-icons/fa";
const Button = (props) => {
    
    
  return (
    <button
    className={`text-white rounded-lg flex items-center justify-center p-1 gap-2
    ${props.color==="blue" ? "bg-blue-700":"bg-orange-600"}`}
    >
    {props.icon=="Contact me" ?   (
        <LiaAddressBook size="20px"/>
    ): (
    <FaGithubAlt size="20px"/>
    )}
    {props.button}
    </button>

  )
}

export default Button