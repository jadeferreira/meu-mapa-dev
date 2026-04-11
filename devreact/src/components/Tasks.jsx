import { ChevronRightIcon, TrashIcon } from "lucide-react";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) { // Componente que renderiza as tarefas
    return (
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
            {tasks.map((task) => (
                <li key={task.id} className="flex gap-2">
                    <button onClick={() => onTaskClick(task.id)} // Ao clicar o estado de conclusão da tarefa é atualizado
                        className={`bg-slate-400 text-left w-full text-white p-2 rounded-md 
                        ${task.isCompleted && "line-through"}`}>
                            {task.title}
                    </button>
                    <button className="bg-slate-400 p-2 rounded-md text-white">
                        <ChevronRightIcon />
                    </button>
                    <button onClick={() => onDeleteTaskClick(task.id)} className="bg-slate-400 p-2 rounded-md text-white">
                        <TrashIcon />
                    </button>
                </li>
        ))}
        </ul>
    );
}

export default Tasks;
