import React from 'react';
import Link from 'next/link';
export default function Navbar() {
  return (
    <nav className='flex w-full h-20 bg-black/40 backdrop-blur-xl border-b border-indigo-500/20 justify-center items-center gap-36 fixed top-0 z-50 font-extrabold'>
        <div className='border-0 transition-all delay-150 duration-200 ease-in-out hover:-translate-y-1'>
            <Link href="/Main/Main" className='text-2xl text-white p-2 bg-none  rounded-3xl transition-all delay-150 duration-200 ease-in-out hover:text-indigo-500'>Главная</Link>
        </div>
        <div className='border-0 transition-all delay-150 duration-200 ease-in-out hover:-translate-y-1'>
            <Link href="/team/team" className='text-2xl text-white p-2 bg-none  rounded-3xl transition-all delay-150 duration-200 ease-in-out hover:text-indigo-500'>Команда</Link>
        </div>
        <div className='border-0 transition-all delay-150 duration-200 ease-in-out hover:-translate-y-1'>
            <Link href="/special" className='text-2xl text-white p-2 bg-none  rounded-3xl transition-all delay-150 duration-200 ease-in-out hover:text-indigo-500'>Информация</Link>
        </div>
        <div className='border-0 transition-all delay-150 duration-200 ease-in-out hover:-translate-y-1'>
            <Link href="/team" className='text-2xl text-white p-2 bg-none  rounded-3xl transition-all delay-150 duration-200 ease-in-out hover:text-indigo-500'>Особенности</Link>
        </div>
        <div className='border-0 transition-all delay-150 duration-200 ease-in-out hover:-translate-y-1'>
            <Link href="/network" className='text-2xl text-white p-2 bg-none  rounded-3xl transition-all delay-150 duration-200 ease-in-out hover:text-indigo-500'>Связь</Link>
        </div>
    </nav>
  );
}