//import createSlice to make slice of state
import { createSlice } from '@reduxjs/toolkit';


export const todoSlice = createSlice({
    //name of slice
    name: "todos",
    //initialState 
    initialState:  {
        nextId: 3,
        data:
        {
            1:{
                content: 'Content 1',
                completed: false
            }
        }
    },

    reducers: {
        //function to add an item to the list
        addTodo: (state, action) => {
            //generaate a new ID using the current nextId value
            const newId = state.nextId;

            //update state with new todo item using computed property name
            //this will make a new property value inside of the 'state.data' object
            //the value is an object literal representing the new todo item
            state.data[newId] = {
                //set the content of new object to content of payload
                content: action.payload.content,
                completed: false
            }
            //increment nextId for next item to make an index
            state.nextId++;
        },
        //function to toggle complete
        toggleComplete: (state, action) => {
            //get the item based on indexing the data object from our store with the id of the payload
            const item = state.data[action.payload.id]
            //set the completed property of the object to true
            item.completed = action.payload.completed;
            
        },
        //function to edit
        edit: (state, action) => {
            console.log(action.payload)
            // const data = state.data[action.payload.id
            // Get the updated data object from the state
            const updatedData = state.data[action.payload.id];
            //set the contented of the updated object to the payload's .content
            updatedData.content = action.payload.content;
        },
        //function to delete an item
        deleteTask: (state, action) => {
            delete state.data[action.payload.id];
        },

    }
})

//create action creators
export const { 
    addTodo,
    toggleComplete,
    edit,
    deleteTask,
} = 
    todoSlice.actions;

    //export as default reducer
export default todoSlice.reducer