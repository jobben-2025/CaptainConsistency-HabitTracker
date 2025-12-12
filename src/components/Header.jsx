const Header0 = ({setItems}) => {
    const submit = (e) => {

        const newItem = {
            id: crypto.randomUUID(),
            name: e.target.elements.name.value,
            frequency: e.target.elements.frequency.value,
        };

        setItems((items) => [...items, newItem];)
    };

    return (
        <div>
            <input
            className="border border-gray-400"
            type="text" 
            name="name"
            />
            <input
            className="border border-gray-400"
            type="text" 
            name="frequency"
            />
            <input
            className="border border-red-800"
            type="submit" 
            name="Submit"
            />
        </div>
    )
}

export default Header0;