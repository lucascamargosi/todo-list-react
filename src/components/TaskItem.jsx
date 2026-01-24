export default function TaskItem({ task, onToggle, onRemove }) {
  return (
    <li>
      <span
        onClick={() => onToggle(task.id)}
        className={task.completed ? 'completed' : ''}
      >
        {task.text}
      </span>

      <button onClick={() => onRemove(task.id)}>X</button>
    </li>
  );
}
