import { useState, useEffect } from "react";
import axios from "axios";

export const DrfApiFetch = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/tasks/", {
        headers: {
          Authorization: "Token bfcc14fade0f201cd08154fe48d4593e326bf580",
        },
      })
      .then((res) => {
        setTasks(res.data);
      });
  }, []);
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title} {task.id}
          </li>
        ))}
      </ul>
    </div>
  );
};
