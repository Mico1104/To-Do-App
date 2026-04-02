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
        <div className='flex items-center gap-2 flex-wrap sm:flex-nowrap w-full'>
            <input
                type="text"
                name="edit-text"
                id="edit-text"
                value={props.editText}
                onChange={(e) => props.setEditText(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') saveEdit();
                }}
                className="flex-1 min-w-0 px-3 py-2 border border-blue-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900 truncate"
                autoFocus
            />
            <div className="flex gap-1 items-center flex-shrink-0">
                <button
                    onClick={saveEdit}
                    className="p-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
                    title='Save'
                >
                    <span className='hidden sm:inline text-sm font-semibold'>Save</span>
                    <img src={savePng} alt="save" className="w-4 h-4 sm:w-5 sm:h-5 inline-block ml-1" />
                </button>
                <button
                    className="p-2 bg-gray-400 text-white rounded-md hover:bg-gray-500 transition-colors"
                    onClick={cancelEdit}
                    title='Cancel'
                >
                    <span className='hidden sm:inline text-sm font-semibold'>Cancel</span>
                    <img src={cancelPng} alt="cancel" className="w-4 h-4 sm:w-5 sm:h-5 inline-block ml-1" />
                </button>
            </div>
        </div>
    )
}

export default EditText