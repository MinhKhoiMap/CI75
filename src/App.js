import './App.css';
import { React, useState } from 'react';
import Card from './components/Card';


function App() {

  const [inputTask, setInputTask] = useState('');
  const [listTask, setListTask] = useState([]);

  const handleShowTask = () => {
    if (inputTask)
      setListTask([...listTask, { task: inputTask, isChecked: false }]);
    else alert('Please enter a task');
    setInputTask('');
  }

  const removeTask = (index) => {
    let temp = [...listTask];
    temp.splice(index, 1);
    setListTask(temp);
  }


  return (
    <div className="main__container">
      <h1 className="title">ToDo</h1>
      <div className="input__wrapper">
        <input name="inputTask" type="text" className="input__task"
          placeholder="Add a ToDo task..."
          value={inputTask}
          onChange={(evt) => setInputTask(evt.target.value)}
        />
        <button className="add-task-btn" onClick={handleShowTask}>Add</button>
      </div>
      <ul className="toDo-list">
        {
          listTask.map(({ task, isChecked }, index) => (
            <li className="toDo-list__task" key={index}>
              <input type="checkbox" name="statusTask" className="toDo-list__task-status" 
                checked={isChecked} 
                onChange={() =>  {
                  let temp = [...listTask];
                  temp.splice(index, 1, {task, isChecked: !isChecked});
                  setListTask(temp);
                }}
              />
              <span className="toDo-list__task-text" 
                style={{textDecoration: `${isChecked ? 'line-through #fff' : 'none'}`}}
              >{task}</span>
              <button className="toDo-list__task-remove-btn" onClick={() => removeTask(index)}>X</button>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;