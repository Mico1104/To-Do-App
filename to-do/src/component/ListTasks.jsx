import deletePng from '../assets/delete.png'
import editPng from '../assets/edit.png'
import cancelPng from '../assets/cancel.png'
import savePng from '../assets/save.png'

function ListTasks(props) {

    function toggleTask(id) {
        props.setTasks(props.tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    }

    const deleteTasks = (id) => {
        props.setTasks(props.tasks.filter((task) => task.id !== id));
    }

    function startEdit(task) {
        props.setEditId(task.id);
        props.setEditText(task.text);
    }

    function saveEdit() {
        props.setTasks(props.tasks.map(task =>
            task.id === props.editId ? { ...task, text: props.editText } : task
        ));
    }

    function cancelEdit() {
        props.setEditId(null);
        props.setEditText("")
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

                            {props.editId === task.id ?(
                                <div className='flex items-center gap-2 flex-1'>
                                    <input 
                                        type="text" 
                                        name="edit-text" 
                                        id="edit-text" 
                                        value={props.editText}
                                        onChange={(e) => props.setEditText(e.target.value)}
                                        className="flex-1 px-3 py-2 border-2 border-blue-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-blue-50 text-gray-800"
                                        autoFocus
                                    />
                                    <div className="flex gap-2 items-center">
                                        <button 
                                            onClick={saveEdit}
                                            className="flex justify-content items-center p-2 bg-green-500 text-white font-medium rounded-full hover:bg-green-600 transition-colors shadow-md hover:shadow-lg active:scale-95"
                                        >
                                            <img src={savePng} alt="save"/>
                                        </button>
                                        <button 
                                            className="flex justify-content items-center p-2 bg-gray-400 text-white font-medium rounded-full hover:bg-gray-500 transition-colors shadow-md hover:shadow-lg active:scale-95"
                                            onClick={cancelEdit}
                                        >
                                            <img src={cancelPng} alt="cancel"/>
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <span className={`flex-1 text-left ${task.completed ? 'text-gray-500' : 'text-gray-800'}`}>{task.text}</span>
                                    <div className="list-btn flex justify-center g-x-px items-center ml-4">
                                        <button onClick={() => deleteTasks(task.id)} className="p-2 hover:bg-red-100 rounded-full transition-colors"
                                        >
                                            <img src={deletePng} alt="Delete task" className="w-5 h-5" />
                                        </button>

                                        <button
                                            className="p-2 hover:bg-red-100 bg-gray-500 rounded-full transition-colors"
                                            onClick={() => startEdit(task)}
                                        >
                                            <img src={editPng} alt="edit-logo" className="w-5 h-5" />
                                        </button>
                                    </div>
                                </>
                            )}

                        </li>
                    ))
                )}
            </ul>
        </div>
    )
}

export default ListTasks