// 1. Initial State: Shuruat mein hamari list mein kya data rahega
export const initialTaskState = {
  tasks: [
    { id: 1, name: 'Learn React Context API', isCompleted: false },
    { id: 2, name: 'Master useReducer hook', isCompleted: true }
  ]
};

// 2. Reducer Function: Jo alag-alag actions ke hisab se state ko badlega
export function taskReducer(state, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: Date.now(), // Unique ID ke liye timestamp
            name: action.payload, // Task ka naam input se aayega
            isCompleted: false
          }
        ]
      };

    case 'TOGGLE_TASK':
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload
            ? { ...task, isCompleted: !task.isCompleted }
            : task
        )
      };

    case 'EDIT_TASK':
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id
            ? { ...task, name: action.payload.newName }
            : task
        )
      };

    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      };

    case 'CLEAR_TASKS':
      return {
        ...state,
        tasks: []
      };

    default:
      return state;
  }
}