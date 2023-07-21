import { useEffect, useState } from 'react'
import './App.css'




function App() {

  const [inputTask, setInputTask] = useState('')
  const [tasks, setTasks] = useState([])
  const [complete, setComplete] = useState(false)

  const addTask = () => {
    if(inputTask.trim() !== ''){
      const newTask = {
        id: Math.round(Date.now()/1000),
        task: inputTask,
        completed: complete,
      }
      console.log(newTask.inputTask)
      setTasks([...tasks, newTask])
      setInputTask('')
      document.getElementById('inputTask').focus()
      console.log(tasks)
    }
  }

  const handleChange = (event) => {
    setInputTask(event.target.value)
  }

  // recibo el id como parametro, setTask recibe una funcion como argumento, y las tareas previas como parametro (copia del original), el 
  // map recorre todas las tareas y verifica si, el id de la tarea es igual al proporcionado, recibe las propiedades intactas del objeto gracias al
  // operador de propagacion, y solo si es igual modifica la propiedad 'completed' cambiandole el valor, si no sigue con las demas tareas.

  const toggleTaskOkey = (taskId) => {
    setTasks((prevTasks) => 
      prevTasks.map((task) => 
        task.id === taskId ? {...task, completed: !task.completed} : task
  ))}

  // filtra la shallow copy de tasks y cuando encuentre una coincidencia en el array con el id proporcionado, la eliminara creando un nuevo array con 
  // todas aquellas que cumplan la condicion de que es igual ( no diferente )
  const removeTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task)=> task.id !== taskId))
  };

 

  const [seconds, setSeconds] = useState(0)
  const [startTimer, setStartTimer] = useState(false)

  /* Dentro del useEffect, utiliza la función setInterval para crear el temporizador. setInterval tomará dos argumentos:
  una función que se ejecutará cada cierto intervalo de tiempo y el intervalo de tiempo en milisegundos. */

  const handleClickTime = () => {
    setStartTimer(true)
  }

  useEffect(() => {
    let intervalId
    if(startTimer){
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds +1)
      }, 1000);

      return () => clearInterval(intervalId)
    }
  },[startTimer])

  const resetTime = () => {
    setSeconds(0)
    setStartTimer(false)
  }

  return (
    <>
      <main>
        <h1>Practica useState y useEffect</h1>
        <h3>Ejercicio 1: Lista de Tareas</h3>
        <p>
          Crea una aplicación de lista de tareas donde el usuario pueda agregar nuevas tareas, marcar las tareas completadas y eliminar tareas. Utiliza los hooks useState y useEffect para administrar el estado de la lista de tareas y las acciones del usuario.
        </p>
        <input
          id='inputTask'
          autoFocus
          type='text'
          placeholder='Ingresa nueva tarea:'
          value={inputTask}
          onInput={handleChange}
        />
        <button onClick={addTask}>Ingresar tarea</button>
        <div id='task-container'>
          <h3>Tareas</h3>
          <ul>
            {tasks.map((task)=>{
              return <li key={task.id} style={{}}>
                <b>Id: </b>{task.id}
                <b>Task: </b>{task.task}
                  {<button type= 'checkbox' style = {{backgroundColor: task.completed ? 'green' : 'red', marginLeft: '15px', borderColor: 'black'}} 
                    onClick={() => toggleTaskOkey(task.id)}>
                      {task.completed ? 'Complete' : 'No complete'}
                  </button>}
                  {<button onClick={() => removeTask(task.id)} style = {{margin: '5px'}}>Delete</button>}
                </li>
            })}
          </ul>
        </div>
        <h3>Ejercicio 2: Contador de tiempo</h3>
        <p>Implementa un contador de tiempo que muestre los segundos transcurridos desde que el componente se montó. Utiliza los
hooks useState y useEffect para administrar el estado del contador y actualizarlo periódicamente.</p>
        <div id="seconds">
          <button onClick={handleClickTime} style={{marginTop: '20px', marginRight: '10px'}}>Start timer</button>
          <button onClick={resetTime}>Reset Timer</button>
          <h3>{seconds}</h3>
        </div>
        </main>
    </>
  )
}

export default App
