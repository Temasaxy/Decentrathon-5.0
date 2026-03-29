import react from 'react';
export default function Main(){
    return(
        <div className='grid grid-flow-col grid-rows-3 gap-4'>
            <div className='col-span-2 row-span-2 text-white rounded-xl h-dvh w-full mt-10 pt-4 shadow-xl  bg-black/50 backdrop-saturate-200 '>
                <h1>Solana Agent Kit!</h1>
                <p>Hello</p>
            </div>
            <div className='col-span-2 text-white rounded-xl h-96 w-full mt-10 pt-4 shadow-xl  bg-black/50 backdrop-saturate-200 '>
                <h1>Solana Agent Kit!</h1>
                <p>Hello</p>
            </div>
        </div>
    )
}