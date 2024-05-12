import React, { useState, useEffect } from 'react';
import './PharmaToDo.css';
function HomeToDo() {
  
  const [tasks,setTasks] = useState(["Fill prescriprion for patient","Order new supplies","other"]);
  const [newTask,setNewTask] =useState("");

function handleInputChange(event){
  setNewTask(event.target.value )

}
function addTask(){
  if(newTask.trim() !==""){
      setTasks(t =>[...t,newTask]);
      setNewTask("");
  }

}
function deleteTask(index){
  const updatedTasks= tasks.filter((_,i) => i !== index);
  setTasks(updatedTasks);
}
function moveTaskUp(index){
  if (index >0){
      const updatedTasks =[...tasks];
      [updatedTasks[index],updatedTasks[index-1]]=[updatedTasks[index-1],updatedTasks[index]];
      setTasks(updatedTasks);

  }
}
function moveTaskDown(index){
  if (index < tasks.length - 1){
      const updatedTasks =[...tasks];
      [updatedTasks[index],updatedTasks[index + 1]]=[updatedTasks[index + 1],updatedTasks[index]];
      setTasks(updatedTasks);

  }
}

  


return (
  <> {/* Wrap everything in a fragment */}
    <div className='to-do-list'>
      <h1 >{/* Add your title here */}</h1>
      <div>
        <input
          type="text"
          placeholder='enter a task..'
          value={newTask}
          onChange={handleInputChange}
        />
        <button className='add-button' onClick={addTask}>
          add
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className='text'>{task}</span>
            <button className='delete-button' onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className='move-button' onClick={() => moveTaskUp(index)}>
              Up
            </button>
            <button className='move-button' onClick={() => moveTaskDown(index)}>
              Down
            </button>
          </li>
        ))}
      </ol>
    </div>
  </>
);

}

export default HomeToDo;
