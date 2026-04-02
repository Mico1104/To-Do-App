
function Input(props) {

    function handleKeyDown(e) {
        if (e.key === "Enter") {
            addTask();
        }
    }

    function addTask() {
        if (props.input.trim() === "") return;

        const newTasks = {
            id: Date.now(),
            text: props.input,
            completed: false
        }
        props.setTasks(prevTasks => [...prevTasks, newTasks]);
        props.setInput("");
    }



    return (
        <div className="input flex m-auto mb-4">
            <input
                type="text"
                name="input"
                id="input"
                value={props.input}
                onChange={(e) => props.setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder='Enter a task'
                className="flex-1 max-w-[200px] border shadow-inner border-gray-400 p-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button 
                onClick={addTask} 
                className='ml-2 py-2 px-6 font-bold rounded-sm bg-black text-white hover:bg-gray-800 transition-colors'
            >
                Add
            </button>

            <div className="filter">
                <select  
                    value={props.filter} 
                    onChange={(e) => props.setFilter(e.target.value)} 
                    name="filter" 
                    id="filter" 
                    className='flex-1 ml-2 py-2.5 px-6 font-bold rounded-sm bg-black text-white hover:bg-gray-800 transition-colors'
                >
                    <option value="all">All</option>
                    <option value="complete">Complete</option>
                    <option value="pending">Pending</option>
                </select>
            </div>
        </div>
    )
}

export default Input