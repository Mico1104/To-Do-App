import deletePng from '../assets/delete.png'

function ListTasks(props) {

    function toggleTask(id) {
        props.setTasks(props.tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    }

    const deleteTasks = (id) => {
        props.setTasks(props.tasks.filter((task) => task.id !== id));
    }

    return (

        <div className='tasks-list flex m-auto' >
            <ul className='flex-1'>
                {props.tasks.length === 0 ? (
                    <li className='text-gray-500 text-center py-8'>No tasks yet. Add one above!</li>
                ) : (
                    props.filteredTasks.map((task) => (
                        <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }} className='flex border border-gray-300 rounded-md shadow-md justify-between items-center p-4 mb-4 bg-gray-50 hover:bg-gray-100 transition-colors'>
                            <div className="checkbox mr-4">
                                <input
                                    type="checkbox"
                                    name="completed"
                                    id={`completed-${task.id}`}
                                    checked={task.completed}
                                    onChange={() => toggleTask(task.id)}
                                    className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                                />
                            </div>
                            <span className={`flex-1 text-left ${task.completed ? 'text-gray-500' : 'text-gray-800'}`}>{task.text}</span>
                            <div className="list-btn ml-4">
                                <button onClick={() => deleteTasks(task.id)} className="p-2 hover:bg-red-100 rounded-full transition-colors">
                                    <img src={deletePng} alt="Delete task" className="w-5 h-5" />
                                </button>
                            </div>

                        </li>
                    ))
                )}
            </ul>
        </div>
    )
}

export default ListTasks