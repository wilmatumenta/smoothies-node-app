import Navbar from '@/components/navbar'
import React from 'react'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <main>
      <div className="shadow-purple-500 shadow-xl border-pink-400 border-b-4 flex justify-center text-4xl p-8 text-white">WELCOME TO SMOOTH WITH TY</div>

      <Navbar />

      <div className="grid grid-flow-col grid-flow-col-4 gap-1">
        <div style={{ width: 400, height: 500 }}>
          <img src="/home.jpg" />
        </div>

        <div style={{ width: 300, height: 500 }}>
          <img src="/home1.jpg" />
        </div>

        <div style={{ width: 300, height: 500 }}>
          <img src="/home2.jpg" />

        </div>

        <div style={{ width: 300, height: 500 }}>
          <img src="/home3.jpg" />
        </div>

      </div>

    </main>
  )
}
