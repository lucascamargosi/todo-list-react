import { createContext } from 'react';
import { useTasks } from '../hooks/useTasks';

export const TasksContext = createContext();

export function TasksProvider({ children }) {
  const tasksState = useTasks();

  return (
    <TasksContext.Provider value={tasksState}>{children}</TasksContext.Provider>
  );
}
