//import react
import React from 'react';
//import mui components
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
//import useState for buttons and edit input
import { useState } from 'react';
import TextField from '@mui/material/TextField';
//import deletetask function from slice
import { deleteTask } from '../redux/todoSlice';
//import dispatch hook
import { useDispatch } from 'react-redux';
//import togglecomplete function from slice
import { toggleComplete } from '../redux/todoSlice';
//import edit function from slice
import { edit } from '../redux/todoSlice';

//todo list item component

const TodoItem = ({ id, content, completed }) => {
    //state setup for edit button
    const [isEditing, setIsEditing] = useState(false);

    //setup state for editInput
    const [ editInput, setEditInput] = useState("")
    //variable for useDispatch redux hook
    const dispatch = useDispatch();
    //function to handle complete click
    const handleCompleteClick = () => {
        //dispatch the togglecomplete function with the id and completed state inversed to toggle it in the store
        dispatch(toggleComplete({id: id, completed: !completed}))
    }
    //function to handle edit click
    const handleEditClick = () => {
        //toggle the editing state when the Edit button is clicked
        setIsEditing(!isEditing)
    }
    //set the input of the edit textbox as the editInput state
    const handleChange = (event) => {
        setEditInput(event.target.value);
    }
    //function to handle save click
    const handleSaveClick = () => {
        //toggle state of isEditing
        setIsEditing(!isEditing)
        //dispatch the edit function with id and content set to editInput state
        dispatch(edit({id: id, content: editInput}))
        //reset value of editInput to nothing to clear textbox
        setEditInput("")
    }
    //function to handle delete click
    const handleDeleteClick = () => {
        //dispatch deleteTask function with Id as a parameter
        dispatch(deleteTask({ id }))
    }

    //this is from MUI
    const labelId = `checkbox-list-label-${id}`;


    //return a list item with conditional render on some parts
    return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>{/*Key and Id are set to current id */}
                {/*If isEditing is false then render edit Icon with handleEditClick onClick*/}
                {/*If isEditing is true then render Checkmark Icon with handleSaveClick onClick*/}
        <ListItem
          key={id}
          id={id}
          secondaryAction={
            <div className="buttons">
                {!isEditing? (
                    <IconButton edge="end" aria-label="comments" onClick={handleEditClick}>
                        <EditIcon />
                    </IconButton>
                    
                ) : (
                    <IconButton edge="end" aria-label="comments" onClick={handleSaveClick}>
                        <CheckIcon />
                    </IconButton>
                )}
                    
                <IconButton edge="end" aria-label="comments" onClick={handleDeleteClick}>
                    <DeleteIcon />
                </IconButton>
            </div>
          }
          sx={{// Change background color based on completed prop
            bgcolor: completed ? 'success.main' : 'transparent',
            color: completed ? 'white' : 'inherit',
            fontStyle: completed ? 'italic' : 'normal'
             
          }}
          disablePadding
        >   {/*Complete checkbox */}
          <ListItemButton role={undefined}  dense>
            <ListItemIcon>
                {/*onChange call handleCompleteClick */}
              <Checkbox
                edge="start"
                checked={completed}
                tabIndex={-1}
                inputProps={{ 'aria-labelledby': labelId }}
                onChange={handleCompleteClick}
                color="default"
              />
            </ListItemIcon>
            {/*Primary is what the content of the item's text is, so setting it to content set's it to the current object's content prop */}
            <ListItemText id={labelId} primary={`${content}`}  />
            
          </ListItemButton>
        </ListItem>
        {/*Textbox that renders if user clicks edit button */}
        {isEditing? (
            <TextField
            label="edit task"
            value={editInput}
            onChange={handleChange}
            sx={{mt: 2}}
             />
        ): null}
    </div> 
        );
    
}

export default TodoItem;