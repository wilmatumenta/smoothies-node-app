import Navbar from '@/components/navbar'
import React from 'react'

export default function Box() {
    return (
        <main>
            <Navbar />
            <div className='item-center text-center text-white  py-3 text-xl shadow-lg shadow-lime-400'>
                <h1>RECIPES</h1>

            </div>
            <div className='overflow-y-scroll h-400'>
                <div className='background'></div>
                <div className="flex items-center justify-center h-30 py-6">

                    <div className="hover:bg-purple-500 bg-purple-700 text-white font-bold rounded-lg border shadow-lg p-10 shadow-lime-400">
                        <h1>STRAWBERRY SMOOTHIE!</h1>
                        <p>STEP 1</p>
                        <li>10 strawberries, hulled (approx 175g)</li>
                        <li>1 small banana, sliced</li>
                        <li>100ml orange juice, chilled</li>
                        <p>STEP 2</p>
                        <li>Blitz the strawberries in a blender with the banana and orange juice until smooth</li>
                        <li>ENJOY</li>

                    </div>
                </div>
                <div className="flex items-center justify-center h-30 py-6">
                    <div className="hover:bg-purple-500 bg-purple-700 text-white font-bold rounded-lg border shadow-lg p-10 shadow-lime-400">
                        <h1>KIWI FRUIT SMOOTHIE</h1>
                        <p>STEP 1</p>
                        <li>add 2 bananas in a blender</li>
                        <li>add milk</li>
                    </div>
                </div>
            </div>

            
        </main>

    )
}
