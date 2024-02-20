import React, { useState } from 'react';
import upArrow from '../../../assets/up-arrow.png';

const NavItem = ({ title, setActive, active }: { title: string, setActive: React.Dispatch<React.SetStateAction<string>>, active: string }) => {
  return (
    <div 
      onClick={() => setActive(title)}
      className={`flex gap-1 py-1 px-2 ${active === title ? 'bg-gradient-to-r from-[#3D055E] to-[#8D04C1] text-gray-200' : ''} cursor-pointer rounded-md`}
    >
      <div className='font-bold'>{title}</div>
    </div>
  )
}

export default function Navigations() {
  const [active, setActive] = useState("10 Active")

  return (
    <div className='flex gap-5 border-[2px] border-black rounded-md w-full'>

      <div className="flex border-r-[2px] border-black rounded-md w-[10%]">
        <p className="text-md font-semibold px-2 flex items-center w-[75%] justify-center">Filter</p>
        <p
          className={`border-r-[1px] border-black px-2 py-2 cursor-pointer rotate-180`}
        >
          <img src={upArrow} alt="up-arrow" className="h-4 w-4" />
        </p>
      </div>

      <div className='flex items-center justify-between w-[90%]'>

        <p
          className={`px-2 py-2 cursor-pointer -rotate-90`}
        >
          <img src={upArrow} alt="up-arrow" className="h-4 w-4" />
        </p>

        {['10 Active', '5 Shortlist', '6 Awaiting Review', '8 Reviewed', '2 Contacting', '2 Rejected'].map((item) => (
          <NavItem
            key={item}
            title={item}
            setActive={setActive}
            active={active}
          />
        ))}

        <p
          className={`px-2 py-2 cursor-pointer rotate-90`}
        >
          <img src={upArrow} alt="up-arrow" className="h-4 w-4" />
        </p>
      </div>
    </div>
  )
}