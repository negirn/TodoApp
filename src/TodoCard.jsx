import React from "react";
import { useHistory } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import TodoImage from './Images/Todo.jpg'

const TodoCard = (props) => {
  const { todo } = props;
  const { id, completed, title } = todo;
  let history = useHistory();

  return (
    <div
      style={{
        margin: "10px",
        padding: "10px",
        width: "200px",
        display:'flex'
      }}
      
    > 
        <Card sx={{ width: '300px'}}>
      <CardActionArea onClick={() => history.push(`/todo/${id}`)}>
        <CardMedia
          component="img"
          height="140"
          image= {TodoImage}
          alt="Todo-Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
             Todo No: {id} 
          </Typography>
          <Typography variant="h6" color="text.primary">
            {title}    
          </Typography>
          <Typography variant="body1" color="text.primary">
           {`Completed: ${completed}`}  
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
};

export default TodoCard;
