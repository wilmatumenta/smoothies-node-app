import React from 'react'
import { useRouter } from 'next/router'
export default function Navbar() {
    const router = useRouter()
    return (

        <>

            <div className="flex justify-end m-9 space-x-4">
                <button className="bg-purple-700 hover:bg-fuchsia-500 text-white font-bold py-2 px-4 rounded" onClick={() => router.push('/')}>
                    Home
                </button>
                <button className="bg-purple-700 hover:bg-fuchsia-400 text-white font-bold py-2 px-4 rounded" onClick={() => router.push('/recipes')}>
                    Recipes
                </button>
                <button className="bg-purple-700 hover:bg-fuchsia-400 text-white font-bold py-2 px-4 rounded" onClick={() => router.push('/contact')}>
                    Contact
                </button>
            </div>
        </>
    )
}
