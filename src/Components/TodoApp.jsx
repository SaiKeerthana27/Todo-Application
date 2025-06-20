import React,{useState} from 'react';
import './TodoApp.css';

function TodoApp(){
    const [tasks,setTasks] = useState(["Break Fast is Ready", "Lets go for a walk"]);
    const [newTasks,setNewtasks] = useState("");

    function handleTask(event){
        setNewtasks(event.target.value)
    }
    function addTask(){
        if(newTasks.trim() != ""){
            setTasks(tasks =>[...tasks,newTasks]);
            setNewtasks("")
        }
    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((element,i) => i != index );
        setTasks(updatedTasks) 
    }
    function moveTaskup(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index-1]] = [updatedTasks[index-1], updatedTasks[index]]
            setTasks(updatedTasks)
        }

    }
    function moveTaskdown(index){
        if(index < tasks.length-1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index+1]] = [updatedTasks[index+1], updatedTasks[index]]
            setTasks(updatedTasks)
        }
    }

    return(
        <div className='todo-list'>
            <div>
                <h1>Todo Application</h1>
                <input type="text" value={newTasks} onChange={handleTask} />
                <button  className="addBtn" onClick={addTask} >Add Task</button>
            </div>
            <ol>
                {tasks.map((task,index) =>
                    <li key={index}>
                        <span className='text'>{task}</span>
                        <button onClick={()=>deleteTask(index)} className='deleteBtn'>
                            Delete
                        </button>
                        <button onClick={()=>moveTaskup(index)} className='moveTaskupBtn'>
                            Up👆
                        </button>
                        <button onClick={()=>moveTaskdown(index)} className='moveTaskdownBtn'>
                            Down👇
                        </button>
                    </li>
                )}
            </ol>
        </div>
    )
}
export default TodoApp