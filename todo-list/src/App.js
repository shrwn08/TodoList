import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [taskList,setTaskList] = useState([]);


  const submitHandler = (e) => {
      e.preventDefault();
      setTaskList([...taskList,task])
      
      setTask("")
      console.log(taskList);
  }


  const removeAll = () =>{
    setTaskList([]);
  }

  const deleteList = (index) => {
  
   setTaskList(taskList.filter((_, i) => i !== index));
  }
  let renderTasks =<h1 className="list">Add Tasks</h1>;

  renderTasks = taskList.map((taask,index)=>{
    return(
      <div key={index} className="mainList">
          <p>{taask}</p>
          <button type="button" onClick={()=>deleteList(index)}>Delete</button>
      </div>
    )
  
  })
  return (
    <div className="App">
      <h1 className="Header">My Todo List</h1>
      <div className="formPage">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            className="addTodo"
            placeholder="Enter Your task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button type="submit" className="addTask">
            Add
          </button>
          <button type="button" className="removeAll" onClick={removeAll}>
            Clear All
          </button>
        </form>
      </div>
      <div className="taskList">
            <ul style={{listStyleType:"none",
                          padding : 0}}>
             <li>{renderTasks}</li> 
            </ul>
        </div>
    </div>
  );
}

export default App;
