import Navbar from '@/components/navbar'
import React from 'react'
import styles from '../styles/Home.module.css'

export default function Contact() {
    return (
        <main className="shadow-2xl shadow-purple-700 text-white">

            <Navbar/>
            <div>
                <h1 className="flex justify-center text-4xl m-4">
                    Join for weekly recipes!
                </h1>
            </div>


            <div className="flex flex-col justify-center p-4 m-10 space-y-4">
                <input type="text" placeholder="Enter Name" className="mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400" />
                <input type="text" placeholder="Enter Email" className="mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400" />
                <button className="bg-purple-700 hover:bg-fuchsia-500 text-white font-bold py-2 px-3 rounded">SUBMIT</button>

            </div>


        </main >
    )
}
