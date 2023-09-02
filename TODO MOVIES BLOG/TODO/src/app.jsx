

import { useState } from "react";
import Button from "./Components/Button/Button";
import Card from "./Components/Card/Card";
import "./app.css";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleAdd = () => {
    const newTask = {
      title: prompt("Input title"),
      status: false,
    };
    setTasks([...tasks, newTask]);
  };

  const handleRemove = (idx) => {
    const filteredTasks = tasks.filter((_, index) => index !== idx);
    setTasks(filteredTasks);
  };

  const handleUpdate = (idx) => {
    const result = window.confirm("Do you want to change the status?");
    const updatedTasks = [...tasks];
        if(result){
          updatedTasks[idx].status=!updatedTasks[idx].status
        }
      setTasks(updatedTasks);

    const newTitle = prompt("Enter new Title");
    if (!newTitle) {
      return;
    }
    updatedTasks[idx].title=newTitle;
    setTasks(updatedTasks)
  };

  return (
    <div className="container">
      <div className="header">
        <p className="header-text">TODO</p>
        <Button onClick={handleAdd} />
      </div>
      <div className="cards-container">
        {tasks.map((task, idx) => (
          <Card
            key={idx}
            title={task.title}
            count={idx + 1}
            status={task.status}
            onUpdate={() => handleUpdate(idx)}
            onRemove={() => handleRemove(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
