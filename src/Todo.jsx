import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CircularProgress from '@mui/material/CircularProgress';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import TodoImage from './Images/Todo.jpg'


const Todo = () => {
  const { id } = useParams();

  const [todoDetails, setTodoDetails] = useState();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => {
        const responseTodo = res.data;
        setTodoDetails(responseTodo);
      });
  }, []);
  const { id: todoId,title, completed } = todoDetails || {};
  return (
    <div style={{ padding: 20}}>
    <Typography gutterBottom variant="h5" component="div" align="left"> Todo Item No {todoId}</Typography>
      {todoDetails ? (
        <Card sx={{ width: '300px'}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image= {TodoImage}
            alt="Todo-Image"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
            {`Todo userId: ${todoId}`}
            </Typography>
            <Typography variant="h6" color="text.primary">
            {`Todo title: ${title}`} 
             </Typography>   
            <Typography variant="body1" color="text.primary">
            {`Todo completed: ${completed}`}   
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default Todo;

