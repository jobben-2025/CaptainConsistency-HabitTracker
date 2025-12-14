import { useState } from "react";
import HabitListItem from "./HabitListItem";


const HabitList = ({ items, setItems }) => {
    // const [newItems, setNewItems] = useState(items);
    

    // function handleRemove(id) {
    //     const newItems = items.filter((item) => item.id !== id)
    //     setNewItems({...items, newItems})
    // }



    return (
        <ul
        className="pt-3 pb-3"
        >
            {items.map((item) => {
                return (
                <HabitListItem key={item.id} item={item} setItems={setItems} />
                // <HabitListItem key={item.id} {...item} />


                )
            })}
        </ul>
    )
}

export default HabitList;