//import useState from react 
import React, { useState } from 'react'
//import box component from mui
import Box from '@mui/material/Box'
//import textfield component from mui
import  TextField  from '@mui/material/TextField';
//import button component from mui
import Button from '@mui/material/Button';
//import dispatch from redux
import { useDispatch } from 'react-redux'
//import addTodo from slice
import { addTodo } from '../redux/todoSlice'

//add todo form component
const AddTodoForm = () => {
    //declare value state variable for user input
    const [value, setValue] = useState('');
    //get dispatch into a variable
    const dispatch = useDispatch() 
    //handle button click
    const handleButtonClick = (event) => {
        event.preventDefault();
        //dispatch the addtodo function with content prop set as current value from text input
        //creates a new todo 
        dispatch(
            addTodo({
                content: value
            })
        )
        //reset value of inputfield label
        setValue("")
    }
    //return a form with text input and add button
    return (
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mt: 5
          }}
        >   {/* value of the textfield is set to value state.
                onchange the state is set to the event's target value */}
            <TextField
             id="standard-basic" 
             label="Add todo" 
             variant="standard" 
             value={value}
             onChange={(event) => setValue(event.target.value)}
             />
            <Button 
             variant="outlined" 
             sx={{my: 4}}
             onClick={handleButtonClick}
             >
                Add
            </Button>
        </Box>
    )
}


export default AddTodoForm;