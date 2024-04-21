import React from 'react'
import { useState } from 'react';
import './PharmaToDo.css';
function HomeToDo() {
    
      const [todos, setTodos] = useState([]);
      const [newTodo, setNewTodo] = useState('');
      const [announcement, setAnnouncement] = useState('');
    
    
      const handleTodoSubmit = (e) => {
        e.preventDefault();
        if (newTodo.trim() === '') return;
        setTodos([...todos, newTodo]);
        setNewTodo('');
      };
  return (
    
          <div className="section">
           
            <div className="to-do-section">
              <h2>To-Do List</h2>
              <form onSubmit={handleTodoSubmit}>
                <input
                  type="text"
                  placeholder="Add a new todo"
                  value={newTodo}
                  onChange={(e) => setNewTodo(e.target.value)}
                />
                <button type="submit">Add</button>
              </form>
              <ul>
                {todos.map((todo, index) => (
                  <li key={index}>{todo}</li>
                ))}
              </ul>
            </div>
  
            <div className="announcement-section">
              <h2>Announcement</h2>
              <textarea
                placeholder="Write an announcement"
                value={announcement}
                onChange={(e) => setAnnouncement(e.target.value)}
              ></textarea>
            </div>
          </div>

  
      
    );
}

export default HomeToDo;
