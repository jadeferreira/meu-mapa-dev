import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"
import { useState } from "react"
import {v4} from "uuid"

function App() {
  const [tasks, setTasks] = useState([{ 
    id: 1,
    title: "Estudar Programação",
    description: "Estudar programação para se tornar um desenvolvedor full stack",
    isCompleted: true
  },
  { id: 2,
    title: "Fazer Exercícios",
    description: "Fazer exercícios para manter a saúde em dia",
    isCompleted: false
  },
  {
    id: 3,
    title: "Ler um Livro",
    description: "Ler um livro para expandir o conhecimento",
    isCompleted: false
  }
  ])

  // Função atualiza o estado de conclusão de uma tarefa
  function onTaskClick(taskId){
    const newTasks = tasks.map((task) => {
      if(task.id === taskId){
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      }
      return task;
    });
    setTasks(newTasks);
  }

  // Função que deleta uma tarefa
  function onDeleteTaskClick(taskId){
    const newTasks = tasks.filter((task) => task.id !== taskId); //.filter = Mostrar todas com excessão da tarefa que eu clicar.
    setTasks(newTasks);

  }

  // Função que adiciona uma nova tarefa
  function onAddTaskSubmit(title, description){
    const newTask ={
      id: v4(),
      title,
      description,
      isCompleted: false
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">Gerenciador de Tarefas</h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick} />
      </div>
    </div>
  )
}

export default App
