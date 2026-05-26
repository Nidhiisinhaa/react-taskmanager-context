import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import TaskItem from './TaskItem';

function TaskList() {
  // Global Context se tasks list aur dispatch function dono nikal rahe hain
  const { tasks, dispatch } = useContext(TaskContext);

  const handleClearAll = () => {
    const confirmClear = window.confirm("Are you sure you want to delete all tasks?");
    if (confirmClear) {
      dispatch({ type: 'CLEAR_TASKS' });
    }
  };

  const listContainerStyle = {
    marginTop: '1rem',
    fontFamily: 'system-ui, sans-serif'
  };

  const clearBtnStyle = {
    width: '100%',
    padding: '0.6rem',
    backgroundColor: '#cbd5e1',
    color: '#334155',
    border: 'none',
    borderRadius: '8px',
    fontSize: '0.95rem',
    fontWeight: '600',
    cursor: 'pointer',
    marginTop: '1rem',
    transition: 'all 0.2s ease'
  };

  return (
    <div style={listContainerStyle}>
      {/* Agar list khaali hai toh fallback message dikhao */}
      {tasks.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#94a3b8', fontStyle: 'italic', margin: '2rem 0' }}>
          No tasks available. Add some tasks to get started!
        </p>
      ) : (
        <>
          {/* Saare tasks ko loop karke render kar rahe hain */}
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}

          {/* Clear All Tasks Button */}
          <button
            onClick={handleClearAll}
            style={clearBtnStyle}
            onMouseOver={(e) => e.target.style.backgroundColor = '#f1f5f9'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#cbd5e1'}
          >
            🧹 Clear All Tasks
          </button>
        </>
      )}
    </div>
  );
}

export default TaskList;