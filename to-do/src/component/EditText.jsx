import cancelPng from '../assets/cancel.png'
import savePng from '../assets/save.png'

function EditText(props) {
    
    function saveEdit() {
        if (props.editText.trim() === "") return;
        props.setTasks(props.tasks.map(task =>
            task.id === props.editId ? { ...task, text: props.editText } : task
        ));

        props.setEditId(null);
        props.setEditText("");
    }

    function cancelEdit() {
        props.setEditId(null);
        props.setEditText("")
    }

    return (
        <div className='flex items-center gap-2 flex-1 min-w-0 overflow-hidden'>
            <input
                type="text"
                name="edit-text"
                id="edit-text"
                value={props.editText}
                onChange={(e) => props.setEditText(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') saveEdit();

                }}
                className="flex-1 min-w-0 px-3 py-2 border-2 border-blue-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-blue-50 text-gray-800"
                autoFocus
            />
            <div className="flex gap-1 sm:gap-2 items-center flex-shrink-0">
                <button
                    onClick={saveEdit}
                    className="p-2 bg-green-500 text-white font-medium rounded-full hover:bg-green-600 transition-colors shadow-md hover:shadow-lg active:scale-95"
                >
                    <img src={savePng} alt="save" className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button
                    className="p-2 bg-gray-400 text-white font-medium rounded-full hover:bg-gray-500 transition-colors shadow-md hover:shadow-lg active:scale-95"
                    onClick={cancelEdit}
                >
                    <img src={cancelPng} alt="cancel" className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
            </div>
        </div>
    )
}

export default EditText