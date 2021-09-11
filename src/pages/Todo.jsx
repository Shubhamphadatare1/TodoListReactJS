import TodoList from "../components/TodoList/TodoList";
import styles from "../pages/Todo.module.css";
const Todo =() =>(
        <>
        <div className= "container" >
        <h1 className= {styles.todoname}>Shubham's Todo List App</h1>
        <TodoList/></div>
        </>
    );
 
export default Todo;