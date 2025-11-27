import { useState, useEffect } from 'react';

export function useTasks() {
  const [tasks, setTasks] = useState([]);

  return {
    tasks,
    setTasks,
  };
}
