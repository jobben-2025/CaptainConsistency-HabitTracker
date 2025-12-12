import { useState } from "react"

const HabitListItem = ({ item }) => {
    const [counter, setCounter] = useState(0);
    const limit = item.frequency;  // how many times a day = total amount of counts

    
    return (
        <li className="flex gap-3 justify-center shadow rounded p-2">
            <p className="flex-4 text-xl text-red-800">
            {/* {item.id} - <br /> */}
            {item.name} <br />
            Done: {counter} / {limit} x/day</p>
            <button className="flex-1 border border-red-900 rounded bg-gray-200 cursor-pointer text-red-900 p-2"
            onClick={(e) => {
                setCounter(counter +1);
            }}>Did it just now !</button>
            
        </li>
    )
}

export default HabitListItem;