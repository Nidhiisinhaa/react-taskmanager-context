import React, { createContext, useReducer } from 'react';
import { taskReducer, initialTaskState } from './taskReducer';

// 1. Global Context Create Karna
export const TaskContext = createContext();

// 2. Context Provider Component Banana
export function TaskProvider({ children }) {
  // useReducer hook ko humne apni reducer logic aur initial state de di
  const [state, dispatch] = useReducer(taskReducer, initialTaskState);

  return (
    // State (tasks list) aur dispatch (actions) ko value mein pass kar rahe hain
    <TaskContext.Provider value={{ tasks: state.tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}