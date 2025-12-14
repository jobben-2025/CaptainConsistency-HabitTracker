import { useState } from "react"

const HabitListItem = ({ item, setItems }) => {
    const [counter, setCounter] = useState(0);
    const limit = item.frequency;  // how many times a day = total amount of counts

    const handleDelete = () => {
        setItems((items) => {
            return items.filter((p) => p.id !== item.id)
        })
    }


    
    return (
        <li className="flex gap-3 justify-center shadow rounded p-2">
            {
                counter==limit ?
                <p className="flex-4 text-xl text-green-800 bg-green-200 rounded-4xl pl-3">
                {item.name} <br />
                Done: {counter} / {limit} x/day</p>
                : <p className="flex-4 text-xl text-red-800 bg-red-300 rounded-4xl pl-3">
                {item.name} <br />
                Done: {counter} / {limit} x/day</p>
            }

            
            <button className="flex-1 border border-red-900 rounded-4xl bg-gray-200 cursor-pointer text-red-900 p-2"
            onClick={(e) => {
                if (counter < limit) {
                setCounter(counter +1);
            } else {
                alert("You are done with this task for today, yay!")
            }
            }}>Did it once!</button>

            <button
            className="flex-1 text-red-900 font-bold border bg-gray-200 rounded-4xl"
            onClick={handleDelete}
            >Delete item</button>
            
        </li>
    )
}

export default HabitListItem;