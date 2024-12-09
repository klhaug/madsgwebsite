
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
            <div >
            <div
        className={`absolute w-[70%] transition-[max-height] duration-300 ease-in-out overflow-hidden bg-gray-100 ${
          navState ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <ul className="p-4">
          <li className="py-2 hover:bg-blue-main hover:text-white">Menu Item 1</li>
          <li className="py-2  hover:bg-blue-main hover:text-white">Menu Item 2</li>
          <li className="py-2  hover:bg-blue-main hover:text-white">Menu Item 3</li>
          <li className="py-2 hover:bg-blue-main hover:text-white">Menu Item 4</li>
        </ul>
      </div>
            </div>
        </div>
    )
}


export default ToggleButton;