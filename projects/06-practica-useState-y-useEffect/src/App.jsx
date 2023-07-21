import { useState } from 'react'
/* import './App.css' */

/* Pasos a seguir:
* 	Declara una variable de estado llamada tasks utilizando el hook useState e inicialízala con un array vacío.
* 	Crea una función addTask que reciba un texto como parámetro y agregue una nueva tarea al estado tasks. La nueva 
      tarea debe ser un objeto con las propiedades id (generado automáticamente), text (texto de la tarea) y completed 
      (booleano que indica si la tarea está completada o no).
* 	Crea una función toggleTask que reciba el id de una tarea y cambie su estado de completada a no completada, o 
      viceversa.
*   Crea una función deleteTask que reciba el id de una tarea y elimine la tarea del estado tasks.
* 	Renderiza los elementos del componente:
*   Muestra la lista de tareas en un elemento ' ul '. Cada tarea debe mostrarse en un elemento ' li ', con un checkbox 
      para marcarla como completada y un botón para eliminarla.
*   Agrega un campo de entrada de texto y un botón "Agregar" para permitir al usuario agregar nuevas tareas a la lista.*/
function App() {
  const [inputTask, setInputTask] = useState('')
  const [tasks, setTask] = useState([])
  const [complete, setComplete] = useState(false)
  //const [btnComplete, setBtnComplete] = useState(false)

  /* const toggleTask = () => {
    if(!complete){
      setComplete(true)
      setBtnComplete(true)
    }else{
      setComplete(false)
      setBtnComplete(false)
    }
  } */

  const toggleTaskOkey = (taskId) => {
    setTask((prevTask) => 
      prevTask.map((task) => 
        task.id === taskId ? {...tasks, completed: !task.completed} : function App() {
          const [inputTask, setInputTask] = useState('')
          const [tasks, setTask] = useState([])
          const [complete, setComplete] = useState(false)
          //const [btnComplete, setBtnComplete] = useState(false)
        
          /* const toggleTask = () => {
            if(!complete){
              setComplete(true)
              setBtnComplete(true)
            }else{
              setComplete(false)
              setBtnComplete(false)
            }
          } */
        
          const toggleTaskOkey = (taskId) => {
            setTask(() => 
                task.id === taskId ? {...tasks, completed: !task.completed} : task
              )
            
          }
        
          const handleChange = (event) => {
            //llamar funcion
            setInputTask(event.target.value)
          }
          const addTask = () => {
            if(inputTask.trim() !== ''){
              const newTask = {
                id: Math.round(Date.now()/1000),
                task: inputTask,
                completed: complete,
              }
              console.log(newTask.inputTask)
              setTask([...tasks, newTask])
              setInputTask('')
              document.getElementById('inputTask').focus()
              console.log(tasks)
            }
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
                <div>
                  Tareas
                  <ul>
                  {tasks.map((task)=>{
                    return <li key={task.id} style={{margin: "8px", alignContent:'center'}}>
                      <b>Id: </b>{task.id}
                      <b>Task: </b>{task.task}
                        {<button type= 'checkbox' style = {{backgroundColor: task.completed ? 'green' : 'red', marginLeft: '15px'}} 
                          onClick={() => toggleTaskOkey(task.id)}>
                            {task.completed ? 'Complete' : 'No complete'}
                        </button>}
                      </li>
                  })}
                </ul>
                </div>
                </main>
            </>
          )
        }
      )
    )
  }

  const handleChange = (event) => {
    //llamar funcion
    setInputTask(event.target.value)
  }
  const addTask = () => {
    if(inputTask.trim() !== ''){
      const newTask = {
        id: Math.round(Date.now()/1000),
        task: inputTask,
        completed: complete,
      }
      console.log(newTask.inputTask)
      setTask([...tasks, newTask])
      setInputTask('')
      document.getElementById('inputTask').focus()
      console.log(tasks)
    }
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
        <div>
          Tareas
          <ul>
          {tasks.map((task)=>{
            return <li key={task.id} style={{margin: "8px", alignContent:'center'}}>
              <b>Id: </b>{task.id}
              <b>Task: </b>{task.task}
                {<button type= 'checkbox' style = {{backgroundColor: task.completed ? 'green' : 'red', marginLeft: '15px'}} 
                  onClick={() => toggleTaskOkey(task.id)}>
                    {task.completed ? 'Complete' : 'No complete'}
                </button>}
              </li>
          })}
        </ul>
        </div>
        </main>
    </>
  )
}

export default App
