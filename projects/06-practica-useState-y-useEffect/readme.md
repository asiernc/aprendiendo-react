Actividad 1 => Pasos a seguir:
* 	Declara una variable de estado llamada tasks utilizando el hook useState e inicialízala con un array vacío.
* 	Crea una función addTask que reciba un texto como parámetro y agregue una nueva tarea al estado tasks. La nueva tarea debe ser un objeto con las propiedades id (generado automáticamente), text (texto de la tarea) y completed (booleano que indica si la tarea está completada o no).
* 	Crea una función toggleTask que reciba el id de una tarea y cambie su estado de completada a no completada, o viceversa.
*   Crea una función deleteTask que reciba el id de una tarea y elimine la tarea del estado tasks.
* 	Renderiza los elementos del componente:
    *   Muestra la lista de tareas en un elemento ' ul '. Cada tarea debe mostrarse en un elemento ' li ', con un checkbox para marcarla como completada y un botón para eliminarla.
    *   Agrega un campo de entrada de texto y un botón "Agregar" para permitir al usuario agregar nuevas tareas a la lista.




Ejercicio 2: Contador de Tiempo
Implementa un contador de tiempo que muestre los segundos transcurridos desde que el componente se montó. Utiliza los
hooks useState y useEffect para administrar el estado del contador y actualizarlo periódicamente.
Pasos a seguir:
* 	Declara una variable de estado llamada seconds utilizando el hook useState e inicialízala con 0.
* 	Utiliza el hook useEffect para iniciar un temporizador que incremente el valor de seconds en 1 cada segundo.	Asegúrate de limpiar el temporizador en la función de limpieza del efecto.
* 	Renderiza los elementos del componente:
*	Muestra el valor actual de seconds en un elemento <p>.
*	Agrega un botón "Reiniciar" que reinicie el contador estableciendo el valor de seconds en 0.
