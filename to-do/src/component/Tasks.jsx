import deletePng from '../assets/delete.png'
import editPng from '../assets/edit.png'

function Tasks(props) {

    const deleteTasks = (id) => {
        props.setTasks(props.tasks.filter((task) => task.id !== id));
    }

    function startEdit(task) {
        props.setEditId(task.id);
        props.setEditText(task.text);
    }
    return (
        <>
            <span className={`flex-1 text-left align-middle leading-relaxed ${props.task.completed ? 'text-gray-500' : 'text-gray-800'}`}>{props.task.text}</span>
            <div className="list-btn flex justify-center items-center ml-4 gap-2">
                <button onClick={() => deleteTasks(props.task.id)} className="p-2 hover:bg-red-100 rounded-full transition-colors"
                >
                    <img src={deletePng} alt="Delete task" className="w-5 h-5" />
                </button>

                <button
                    className="p-2 hover:bg-red-100 bg-gray-500 rounded-full transition-colors"
                    onClick={() => startEdit(props.task)}
                >
                    <img src={editPng} alt="edit-logo" className="w-5 h-5" />
                </button>
            </div>
        </>
    )
}

export default Tasks