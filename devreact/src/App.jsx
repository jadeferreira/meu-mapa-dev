import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"
import { useEffect, useState } from "react"
import { v4 } from "uuid"
import Title from "./components/Title";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks)); // Convertendo essa lista (task) js, em string para poder salvar no localStorage.
  }, [tasks])

  // Exemplo usando API
  useEffect(() => {
    // const fetchTasks = async () => {
    //   const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5"); // Requisição para pegar as tarefas de um servidor fake.
    //   const data = await response.json();

    //   setTasks(data);
    // };

    //fetchTasks();
  }, []); // O array vazio é para que a função seja executada apenas uma vez, quando o componente for montado.

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
        <Title>Gerenciador de Tarefas</Title>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick} />
      </div>
    </div>
  )
}

export default App
