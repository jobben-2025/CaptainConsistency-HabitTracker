// import { useState } from "react"

const HabitListItem = ({ item, setItems, onItemUpdate }) => {
    // const [counter, setCounter] = useState(item.counter || 0);
    const counter = item.counter || 0;
    const limit = parseInt(item.frequency)

    const isCompleted = counter >= limit;

    const handleDelete = () => {
        setItems((items) => {
            return items.filter((p) => p.id !== item.id)
        })
    }

    const handleIncrement = () => {
        if (counter < limit) {
            const newCounter = counter+1;
            

            onItemUpdate(item.id, {
                counter: newCounter,
                isCompleted: newCounter >= limit
            });

            

            if (newCounter > limit) {
                alert("You are done with this task for today, yay!")
            }
        } else {
            alert("You are done with this task for today, yay!")
        }
    }

    
    return (
        <li className="flex gap-3 justify-center p-2">
            {
                isCompleted ?
                <p className="flex-4 text-xl text-green-800 bg-green-200 rounded-4xl pl-3">
                {item.name} <br />
                Done: {counter} / {limit} x/day</p>
                : <p className="flex-4 text-xl text-red-800 bg-red-300 rounded-4xl pl-3">
                {item.name} <br />
                Done: {counter} / {limit} x/day</p>
            }

            
<button 
            className="flex-1 border border-red-900 rounded-4xl bg-gray-200 cursor-pointer text-red-900 p-2"
            onClick={handleIncrement}
            >Did it once!</button>

            <button
            className="flex-1 text-red-900 font-bold border bg-gray-200 rounded-4xl"
            onClick={handleDelete}
            >Delete item</button>
            
        </li>
    )
}

export default HabitListItem;