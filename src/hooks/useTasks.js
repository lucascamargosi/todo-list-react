import { useState } from 'react';
import { v4 as uuid } from 'uuid';

export function useTasks() {
  const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem('tasks');
    return stored ? JSON.parse(stored) : [];
  });

  // funcao para adicionar tarefas via input do usuario
  function addTask(text) {
    if (text.trim() === '') return;

    const newTask = {
      id: uuid(),
      text,
      completed: false,
    };

    const updatedTasks = [...tasks, newTask];

    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  }

  // funcao para alternar tarefas via id
  function toggleTask(id) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed,
        };
      }
      return task;
    });

    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  }

  // funcao para remover tarefas via id
  function removeTask(id) {
    const updatedTasks = tasks.filter((task) => task.id !== id);

    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  }

  return {
    tasks,
    addTask,
    toggleTask,
    removeTask,
  };
}
