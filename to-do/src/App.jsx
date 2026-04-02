import { useState, useEffect } from 'react'
import Input from './component/Input';
import ListTasks from './component/ListTasks';


function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasksString = localStorage.getItem("tasks");
    return savedTasksString ? JSON.parse(savedTasksString) : [];
  });

  const [input, setInput] = useState("");
  // filter state
  const [filter, setFilter] = useState("All");
  
  // Editing features state
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");


  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const filteredTasks = tasks.filter((task) => {
    if (filter === "complete")
      return task.completed;
    if (filter === "pending")
      return !task.completed;

    return true;
  });

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="container flex-col justify-center items-center max-w-lg text-center px-5 pt-5 bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">TO-DO APP</h1>

        <Input
          editId={editId}
          setEditId={setEditId}
          editText={editText}
          setEditText={setEditText}
          filteredTasks={filteredTasks} 
          filter={filter} 
          setFilter={setFilter} 
          input={input} 
          setInput={setInput} 
          setTasks={setTasks} 
        />
        <ListTasks
          editId={editId}
          setEditId={setEditId}
          editText={editText}
          setEditText={setEditText}
          filteredTasks={filteredTasks} 
          tasks={tasks} 
          setTasks={setTasks} 
        />
        
      </div>
    </div>
  )
}

export default App