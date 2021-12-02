import {Box,Avatar, Button, Divider, List, ListItem, ListItemAvatar, ListItemText, Pagination } from '@mui/material'
import {makeStyles} from '@mui/styles'
import { padding } from '@mui/system';
import React, { useEffect } from 'react'
import './Todo.css';

const useStyles = makeStyles(() => ({
    root: {
      width: "100%",
      backgroundColor: "black"
    },
    item: {
       padding: '1px'
    },
    avatar: { marginRight: '5px' },
    paginator: {
      justifyContent: "center",
      padding: "10px"
    }
  }));

const Todo = (props) => {
    const classes = useStyles();
    const itemsPerPage = 5;
    const [page, setPage] = React.useState(1);
    const [noOfPages] = React.useState(
      Math.ceil(props.todos.length / itemsPerPage)
    );
        

    const handleChange = (event, value) => {
      setPage(value);
    };
  
    //  console.log(props.todos.length)
    return (
        <div>
          <List dense compoent="span">
            {props.todos
              .slice((page - 1) * itemsPerPage, page * itemsPerPage)
              .map((todo) => {
                return (
                  <ListItem
                    key={todo.id}
                    button
                    onClick={() => console.log("")}
                  >
                    <ListItemText
                      id={`list-secondary-label-${todo.todo}`}
                      primary={todo.todo}
                      secondary={
                        todo.todo
                      }
                      className={classes.item}
                    />
                    <Button onClick={() => props.delete(todo.id)} >Delete</Button>
                    {/* <ListItemAvatar>
                      <Avatar
                        alt={`Avatar n°${projectItem + 1}`}
                        src={todo.projectImage}
                        className={classes.avatar}
                      />
                    </ListItemAvatar> */}
                  </ListItem>
                );
              })}
          </List>
          <Divider />
          {props.todos.length > 0 ? (
          <Box component="span">
                <Pagination
                count={noOfPages}
                page={page}
                onChange={handleChange}
                defaultPage={1}
                color="primary"
                size="large"
                showFirstButton
                showLastButton
                classes={{ ul: classes.paginator }}
                />
            </Box>) : ''
            }
          
             
          
          
          
        </div>
      );
}

export default Todo
