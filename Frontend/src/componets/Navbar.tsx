import React from 'react';
import Image from "next/image"; 
export default function Navbar() {
  return (
    <nav>
      <ul className="flex rounded-xl flex-row mt-16 p-4 bg-black/50 backdrop-saturate-200 shadow-xl font-mono">
        <li className='px-32'>
            <a href="" className='text-fuchsia-500 hover:text-white transition delay-100 duration-200 ease-in-out'>Главная</a>
        </li>
        <li className='pr-32'>
            <a href="" className='text-fuchsia-500 hover:text-white transition delay-100 duration-200 ease-in-out'>Команда</a>
        </li>
        <li className='pr-32'>
            <a href="" className='text-fuchsia-500 hover:text-white transition delay-100 duration-200 ease-in-out'>Информация</a>
        </li>
        <li>
            <a href="" className='text-fuchsia-500 hover:text-white transition delay-100 duration-200 ease-in-out'>Особенности</a>
        </li>
        <li className='px-32 '>
            <a href="" className='text-fuchsia-500 hover:text-white transition delay-100 duration-200 ease-in-out'>Связь</a>
        </li>
      </ul>
    </nav>
  );
}