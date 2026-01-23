import { useState } from 'react';
import { useTasks } from './hooks/useTasks';

import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

export default function App() {
  const { tasks, addTask, toggleTask, removeTask } = useTasks();
  const [text, setText] = useState(''); // estado para o input

  // funcao para adicionar tarefas
  function handleAddTask() {
    if (text.trim() === '') return;
    addTask(text);
    setText('');
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Todo List</h1>

      <TaskInput text={text} onTextChange={setText} onAdd={handleAddTask} />

      <TaskList tasks={tasks} onToggle={toggleTask} onRemove={removeTask} />
    </div>
  );
}
