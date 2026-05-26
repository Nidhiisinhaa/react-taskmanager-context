import React, { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

function TaskItem({ task }) {
  const { dispatch } = useContext(TaskContext);

  // Local states edit mode aur naye naam ko handle karne ke liye
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(task.name);

  // 1. Toggle handler
  const handleToggle = () => {
    dispatch({ type: 'TOGGLE_TASK', payload: task.id });
  };

  // 2. Delete handler
  const handleDelete = () => {
    dispatch({ type: 'DELETE_TASK', payload: task.id });
  };

  // 3. Edit Save handler
  const handleSaveEdit = () => {
    if (editName.trim() === '') return;
    dispatch({
      type: 'EDIT_TASK',
      payload: { id: task.id, newName: editName.trim() }
    });
    setIsEditing(false);
  };

  // Styles configuration
  const itemStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.75rem 1rem',
    backgroundColor: task.isCompleted ? '#f1f5f9' : '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    marginBottom: '0.5rem',
    opacity: task.isCompleted ? 0.6 : 1, // Grey-out completed tasks
    transition: 'all 0.2s ease',
    fontFamily: 'system-ui, sans-serif'
  };

  const textStyle = {
    textDecoration: task.isCompleted ? 'line-through' : 'none',
    color: task.isCompleted ? '#64748b' : '#0f172a',
    fontSize: '1rem',
    marginLeft: '0.5rem',
    flex: 1
  };

  const actionBtnStyle = {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '0.9rem',
    marginLeft: '0.5rem',
    padding: '0.2rem 0.4rem',
    borderRadius: '4px'
  };

  return (
    <div style={itemStyle}>
      <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
        {/* Checkbox to Toggle Status */}
        <input
          type="checkbox"
          checked={task.isCompleted}
          onChange={handleToggle}
          style={{ cursor: 'pointer', width: '1.1rem', height: '1.1rem' }}
        />

        {isEditing ? (
          <input
            type="text"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            style={{ marginLeft: '0.5rem', padding: '0.2rem 0.5rem', fontSize: '1rem', flex: 1, outline: 'none', border: '1px solid #cbd5e1', borderRadius: '4px' }}
          />
        ) : (
          <span style={textStyle}>{task.name}</span>
        )}
      </div>

      {/* Action Buttons Group */}
      <div>
        {isEditing ? (
          <button onClick={handleSaveEdit} style={{ ...actionBtnStyle, color: '#10b981', fontWeight: '600' }}>
            💾 Save
          </button>
        ) : (
          <button onClick={() => setIsEditing(true)} style={{ ...actionBtnStyle, color: '#2563eb' }} disabled={task.isCompleted}>
            ✏️ Edit
          </button>
        )}

        <button onClick={handleDelete} style={{ ...actionBtnStyle, color: '#ef4444' }}>
          🗑️ Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;