const HabitForm = ({setItems}) => {
    const submit = (e) => {
        e.preventDefault();

        const newItem = {
            id: crypto.randomUUID(3),
            name: e.target.elements.name.value,
            frequency: e.target.elements.frequency.value,
        };

        setItems((items) => [...items, newItem])
    };

    return (
        <form onSubmit={submit} className="flex justify-center gap-5">
            <input
            className="border border-white field-sizing-content rounded shadow  pl-3 pr-3 text-red-900"
            type="text" 
            name="name"
            placeholder="Type your new habit here:"
            />
            <input
            className="border border-white rounded shadow pl-3 pr-3  text-red-900"
            type="text" 
            name="frequency"
            placeholder="how often per day?"
            />
            <input
            className="border border-red-900 rounded shadow px-2 py-1  text-red-900"
            type="submit" 
            name="Submit"
            />
        </form>
    )
}

export default HabitForm;