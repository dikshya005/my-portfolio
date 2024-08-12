import React from 'react'

const Navbar = () => {
  const navList=["HOME","ABOUT","CONTACT"];
  return (
   <nav>
    <ul className='flex gap-4'>
      {navList.map((item,index)=>(
      <li className="text-white hover:text-blue-500"  key={index}>{item}</li>
  ))}
    </ul>
   </nav>
  );
};

export default Navbar