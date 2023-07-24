import { useEffect, useState } from 'react'
import './App.css'

function App() {

  // EXERCISE 1

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

  // EXERCISE 2

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

  // EXERCISE 3

/* Declara una variable de estado llamada users utilizando el hook useState e inicialízala con un array vacío.
Crea una función addUser que reciba el nombre y el correo electrónico de un usuario como parámetros y agregue un nuevo
 usuario al estado users. El nuevo usuario debe ser un objeto con las propiedades id (generado automáticamente), name 
 (nombre del usuario) y email (correo electrónico del usuario).
Renderiza los elementos del componente:
Agrega un formulario con campos de entrada de texto para ingresar el nombre y el correo electrónico de un nuevo usuario.
Agrega un botón "Agregar Usuario" que permita al usuario agregar un nuevo usuario a la lista.
Muestra la lista de usuarios en una tabla. Cada usuario debe mostrarse en una fila de la tabla con las columnas de "Nombre" y "Correo electrónico".
Utiliza el hook useEffect para mostrar un mensaje cuando se agregue un nuevo usuario. El mensaje debe aparecer durante
 3 segundos y luego desaparecer. */

  const [users, setUsers] = useState([])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [showAlert, setShowAlert] = useState(false)
  const [message, setMessage] = useState('')

  const addUser = () => {
    if((name.trim()!== '' && email.trim()) !== ''){
      const newUser = {
        id: Math.round(Date.now()/1000),
        userName : name,
        emailUser : email
      }
      showMessage('User added correctly!')
      console.log(showAlert)
      setUsers([...users, newUser])
      setName('')
      setEmail('')
    }
  }
  const handleUserNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const showMessage = (messageText) => {
    setMessage(messageText)
    setShowAlert(true)
  }

  useEffect(()=> {
    if(showAlert){
      const timer = setTimeout(() => {
        setShowAlert(false)
      }, 3000);

      return () => {clearTimeout(timer)}
    }
  },[showAlert])
  


  return (
    <>
      <main>
        <h1>useState y useEffect practique</h1>
        <div>
          <h3>Exercise 1: Tasks list</h3>
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
        </div>
        <h3>Tasks</h3>
        <div id='task-container'>
          <ul>
            {tasks.map((task)=>{
              return <li key={task.id} style={{ listStyle: "none"}}>
                <b>Id: </b>{task.id}
                <b>Task: </b>{task.task}
                  {<button type= 'checkbox' style = {{backgroundColor: task.completed ? 'green' : 'red', marginLeft: '80px', borderColor: 'black'}} 
                    onClick={() => toggleTaskOkey(task.id)}>
                      {task.completed ? 'Complete' : 'No complete'}
                  </button>}
                  {<button onClick={() => removeTask(task.id)} style = {{margin: '5px'}}>Delete</button>}
                </li>
            })}
          </ul>
        </div>
        <br></br>
        <br></br>
        <h3>Ejercicio 2: Contador de tiempo</h3>
        <p>Implementa un contador de tiempo que muestre los segundos transcurridos desde que el componente se montó. Utiliza los
            hooks useState y useEffect para administrar el estado del contador y actualizarlo periódicamente.</p>
        <div id="task-container">
          <button onClick={handleClickTime}  style={{margin: 'auto'}}>Start timer</button>
          <h3>{seconds}</h3>
          <button onClick={resetTime}  style={{margin: 'auto', marginRight:'70px'}}>Reset Timer</button>
        </div>
        <br></br>
        <br></br>
        <h3>Exercise 3: Users list</h3>
          <p>Crea una aplicación de lista de usuarios donde el usuario pueda agregar nuevos usuarios y ver la lista completa de usuarios. Utiliza los hooks useState y useEffect para administrar el estado de la lista de usuarios y las acciones del usuario.</p>
        <form style={{display: 'flex'}} onSubmit={(e) => e.preventDefault()}>
          <input
            value={name} 
            onInput={handleUserNameChange} 
            type='text' 
            placeholder='Username' 
            required
          />
          <input 
            value= {email} 
            onChange={handleEmailChange}/* {(e)=>{setEmail(e.target.value)}} */ 
            type='email' 
            placeholder='Email' 
            required
          />
          <button style={{width: '80px', fontSize: '.8em'}} onClick={addUser}>Add User</button>
        <br></br>
        </form>
        <div>
          {showAlert && <h2>{message}</h2>}
        </div>
        <table border={'3px'} style = {{border:'3px solid ',width:'800px',marginTop:'20px',}}>
          <thead>
            <tr>
              <th>User ID</th>
              <th>UserName</th>
              <th>User Email</th>
            </tr>
          </thead>
            {users.map((user)=>{
                return <tbody key={user.id}>
                  <tr>
                    <td>{user.id}</td>
                    <td>{user.userName}</td>
                    <td>{user.emailUser}</td>
                  </tr>
                </tbody>
            })}
        </table>
      </main>
    </>
  )
}

export default App
