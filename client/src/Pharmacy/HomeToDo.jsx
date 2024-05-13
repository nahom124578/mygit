import React, { useState, useEffect } from 'react';
import './PharmaToDo.css';
function HomeToDo() {
   const [announcementData, setAnnouncementData] = useState(null); // Announcement data state
   const [isVisible, setIsVisible] = useState(true); // Announcement visibility state

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

  // Fetch announcements (optional)
  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts'); // Replace with your actual API endpoint
        const data = await response.json();
        setAnnouncementData(data); // Update announcement data state
      } catch (error) {
        console.error('Error fetching announcements:', error);
      }
    };

    // Only fetch if announcementData is initially empty
    if (!announcementData) {
      fetchAnnouncements();
    }
  }, []); // Empty dependency array for fetching on component mount

  const handleDismiss = () => {
    setIsVisible(false); // Hide announcement
  };


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

    <div className={`announcement ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="announcement-section">
        {announcementData && ( // Display content only if data exists
          <>
            <h3 className="announcement-title">{announcementData[0].title}</h3> {/* Access title from the first post */}
            <p className="announcement-message">
              {announcementData[0].body} {/* Access body from the first post */}
            </p>
            {announcementData[0].id && ( // Check for optional dismiss button ID
              <button className="announcement-dismiss" onClick={handleDismiss}>
                Dismiss (Example ID: {announcementData[0].id})
              </button>
            )}
          </>
        )}
      </div>
    </div>
  </>
);

}

export default HomeToDo;
