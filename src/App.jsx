import React from 'react';
import TaskSummary from './components/TaskSummary';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

function App() {
  // Main layout wrapper container styles
  const appContainerStyle = {
    backgroundColor: '#f8fafc', // Light elegant background page
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
    fontFamily: 'system-ui, sans-serif'
  };

  const cardStyle = {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.05)',
    width: '100%',
    maxWidth: '500px',
    padding: '2rem',
    border: '1px solid #f1f5f9'
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '2rem'
  };

  const titleStyle = {
    margin: '0 0 0.5rem 0',
    color: '#db2777', // Pink/Burgundy theme heading from mockup
    fontSize: '2rem',
    fontWeight: '800',
    letterSpacing: '-0.025em'
  };

  const subtitleStyle = {
    margin: 0,
    color: '#64748b',
    fontSize: '0.85rem',
    textTransform: 'uppercase',
    fontWeight: '600',
    letterSpacing: '0.05em'
  };

  return (
    <div style={appContainerStyle}>
      <div style={cardStyle}>

        {/* Header Layout Banner */}
        <div style={headerStyle}>
          <h1 style={titleStyle}>Building a Task Manager with React</h1>
          <p style={subtitleStyle}>
            Leveraging Context API and useReducer for Efficient State Management
          </p>
        </div>

        {/* 1. Global Stat Summary Module */}
        <TaskSummary />

        {/* 2. Form Input Submission Field */}
        <TaskInput />

        {/* 3. Live Core Sync Task Mapping List */}
        <TaskList />

      </div>
    </div>
  );
}

export default App;