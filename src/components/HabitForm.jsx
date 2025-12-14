const HabitForm = ({setItems}) => {
    const submit = (e) => {
        e.preventDefault();

        const newItem = {
            id: crypto.randomUUID(3),
            name: e.target.elements.name.value,
            frequency: e.target.elements.frequency.value,
        };

        setItems((items) => [...items, newItem])


        
        // setItems((items) => {
        //     return [...items, newItem]
        // })        

        // after submitting empty out form values:
        e.target.reset()
        e.target.elements.name.focus()
        
    };

    return (
        <form onSubmit={submit} className="flex justify-center gap-5 text-white">
            <input
            className="border border-red-300 field-sizing-content rounded-2xl shadow  pl-3 pr-3"
            type="text" 
            name="name"
            placeholder="Type your new habit here:"
            />
            <input
            className="border border-red-300 field-sizing-content rounded-2xl shadow pl-3 pr-3"
            type="text" 
            name="frequency"
            placeholder="how often per day?"
            />
            <input
            className="border border-red-300 rounded-2xl shadow px-2 py-1"
            type="submit" 
            name="Submit"
            value="Create habit"
            />
                
        </form>
    )
}

export default HabitForm;