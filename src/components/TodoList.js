//import react
import React from 'react';
//import list item

//import useSelector for getting state from the store
import { useSelector } from 'react-redux';

//import components from mui
import List from '@mui/material/List';
import { Paper } from '@mui/material';
//import item component 
import TodoItem from './TodoItem'





//todo list component
const TodoList = () => {
    //useSelector here to get the data object from the store
    const todos = useSelector((state) => state.todos.data)
    //use object.keys to return an array of the keys of the data object of the todos
    const todoIds = Object.keys(todos)
    console.log(todoIds)
    //the array from the object.keys is used for a map method where the info for the notes is passed as props
    return (
        <Paper sx={{ 
            width: '100%', 
            maxWidth: 520, 
            bgcolor: 'background.paper'
            }}>
            <List sx={{ 
                width: '100%', 
                maxWidth: 520, 
                bgcolor: 'background.paper'

                }}>
            {todoIds.map((id) => {
                return(
                    <TodoItem 
                    id={id} 
                    content={todos[id].content} 
                    completed={todos[id].completed}
                    />
                )
            })}
            </List>
        </Paper>
    );
}

export default TodoList;