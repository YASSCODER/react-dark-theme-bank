import React from 'react'

interface ButtonProps {

  styles: string;
}


const Button: React.FC<ButtonProps> = ({styles}) => {
  return (
    <button type='button' className={`w-40 py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles} rounded-[10px]`}>
      Get Started
    </button>
  )
}

export default Button