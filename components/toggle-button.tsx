
'use client'

import { useState } from "react";

function ToggleButton() {
const [navState, setNavState] = useState(false)

function onClick() {
    setNavState(!navState)
}

    return (
        <div>
            <button onClick={onClick} className="bg-blue-main text-white px-20 h-10 rounded-md hover:bg-blue-900">Click me</button>
            {(navState) ? <div className="bg-blue-main text-white px-10 mt-10 transition">It&apos;s true </div> : null }
        </div>
    )
}


export default ToggleButton;