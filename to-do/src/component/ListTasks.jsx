import EditText from './EditText';
import Tasks from './Tasks'


function ListTasks(props) {

    function toggleTask(id) {
        props.setTasks(props.tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
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

                                {props.editId === task.id ? (
                                    <EditText
                                        tasks={props.tasks}
                                        setTasks={props.setTasks}
                                        editId={props.editId}
                                        setEditId={props.setEditId}
                                        editText={props.editText}
                                        setEditText={props.setEditText}
                                    />
                                ) : (
                                    <Tasks
                                        task={task}
                                        tasks={props.tasks}
                                        setTasks={props.setTasks}
                                        setEditId={props.setEditId}
                                        setEditText={props.setEditText}
                                    />
                                )}

                            </li>
                    ))
                )}
            </ul>
        </div>
    )
}

export default ListTasks