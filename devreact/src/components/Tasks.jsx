import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { CheckIcon } from "lucide-react";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) { // Componente que renderiza as tarefas
    const navigate = useNavigate();

    function onSeeDetailsClick(task){
        const query = new URLSearchParams(); // Tratamento na string pra ela não ter nenhum conflito.
        query.set("title", task.title);
        query.set("description", task.description);
        navigate(`/task?${query.toString()}`);
    }

    return (
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
            {tasks.map((task) => (
                <li key={task.id} className="flex gap-2">
                    <button onClick={() => onTaskClick(task.id)} // Ao clicar o estado de conclusão da tarefa é atualizado
                        className={`bg-slate-400 text-left w-full text-white p-2 rounded-md flex
                        ${task.isCompleted && "line-through"}`}>
                            {task.isCompleted && <CheckIcon />}
                            {task.title}
                    </button>
                    <Button onClick={() => onSeeDetailsClick(task)}>
                        <ChevronRightIcon />
                    </Button>

                    <Button onClick={() => onDeleteTaskClick(task.id)}>
                        <TrashIcon />
                    </Button>
                </li>
        ))}
        </ul>
    );
}

export default Tasks;
