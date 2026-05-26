import React, { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

function TaskInput() {
  const [taskName, setTaskName] = useState('');

  // Context se dispatch function nikal rahe hain action trigger karne ke liye
  const { dispatch } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check agar input khaali toh nahi hai
    if (taskName.trim() === '') return;

    // Reducer ko action bhej rahe hain naya task add karne ke liye
    dispatch({ type: 'ADD_TASK', payload: taskName.trim() });

    // Input field ko wapas khaali kar rahe hain
    setTaskName('');
  };

  const formStyle = {
    display: 'flex',
    gap: '0.5rem',
    marginBottom: '1.5rem'
  };

  const inputStyle = {
    flex: 1,
    padding: '0.6rem 1rem',
    borderRadius: '8px',
    border: '1px solid #cbd5e1',
    fontSize: '1rem',
    outline: 'none'
  };

  const buttonStyle = {
    backgroundColor: '#db2777', // Pink theme text-manager header ke matching
    color: '#ffffff',
    border: 'none',
    borderRadius: '8px',
    padding: '0.6rem 1.2rem',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.2s'
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <input
        type="text"
        placeholder="Add a new task..."
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        style={inputStyle}
      />
      <button type="submit" style={buttonStyle}>
        Add Task
      </button>
    </form>
  );
}

export default TaskInput;