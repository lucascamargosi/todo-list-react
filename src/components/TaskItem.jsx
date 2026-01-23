export default function TaskItem({ task, onToggle, onRemove }) {
  return (
    <li>
      <span
        onClick={() => onToggle(task.id)}
        style={{
          textDecoration: task.completed ? 'line-through' : 'none',
          cursor: 'pointer',
        }}
      >
        {task.text}
      </span>

      <button onClick={() => onRemove(task.id)}>X</button>
    </li>
  );
}
