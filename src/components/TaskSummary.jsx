import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

function TaskSummary() {
  // Global context se tasks ka data nikal rahe hain
  const { tasks } = useContext(TaskContext);

  // Total aur completed tasks ki ginti (calculation)
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.isCompleted).length;

  const summaryStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: '#f8fafc',
    border: '1px solid #e2e8f0',
    borderRadius: '12px',
    padding: '1rem',
    marginBottom: '1.5rem',
    fontFamily: 'system-ui, sans-serif'
  };

  const statBoxStyle = {
    textAlign: 'center'
  };

  return (
    <div style={summaryStyle}>
      <div style={statBoxStyle}>
        <h4 style={{ margin: '0 0 0.2rem 0', color: '#64748b', fontSize: '0.9rem' }}>Total Tasks</h4>
        <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1e293b' }}>{totalTasks}</span>
      </div>
      <div style={{ borderLeft: '1px solid #e2e8f0' }}></div>
      <div style={statBoxStyle}>
        <h4 style={{ margin: '0 0 0.2rem 0', color: '#64748b', fontSize: '0.9rem' }}>Completed</h4>
        <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#10b981' }}>{completedTasks}</span>
      </div>
    </div>
  );
}

export default TaskSummary;