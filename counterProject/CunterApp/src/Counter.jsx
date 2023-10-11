
import { useState } from "react";
function Counter(){
    const [x, setX] = useState(0);
    return(
        <div className="flex flex-col items-center gap-6 text-3xl font-medium p-4 border-solid ">
            <span className="p-4 bg-gray-900 text-white rounded-md">Count X: {x} is {(x%2==0)? 'even' : 'Odd'}</span>
            <button className="bg-teal-700 p-3 px-12 rounded-md border-solid border-2 border-sky-500 " onClick={()=>
            setX(x+1)}>Inc</button>

            <button className="bg-teal-700 p-3 px-11 rounded-md border-solid border-2 border-sky-500" onClick={()=>
            setX(x-1)}>Dec</button>
        </div>
    )
}

export default Counter;