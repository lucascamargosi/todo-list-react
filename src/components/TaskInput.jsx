export default function TaskInput({ text, onTextChange, onAdd }) {
  return (
    <div>
      <input
        value={text}
        onChange={(e) => onTextChange(e.target.value)}
        placeholder="Digite uma tarefa"
      />

      <button onClick={onAdd}>Adicionar</button>
    </div>
  );
}
