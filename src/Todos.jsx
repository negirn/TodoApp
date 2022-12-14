import React, { useEffect, useState } from "react";
import axios from "axios";
import CircularProgress from '@mui/material/CircularProgress';
import TodoCard from "./TodoCard";
import Typography from "@mui/material/Typography";


const Todos = () => {
  const [todos, setTodos] = useState();

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/todos`).then((res) => {
      const responseTodos = res.data;
      setTodos(responseTodos);
    });
  }, []);

  console.log(todos);
  return (
    <>
      <Typography gutterBottom variant="h4" component="div" align="center"> Todo Items</Typography>
      {todos ? (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {todos.slice(0, 30).map((todo) => (
            <TodoCard key={todo.id} todo={todo} />
          ))}
        </div>
      ) : (
        <CircularProgress />
      )}
    </>
  );
};

export default Todos;


