//import container from mui
import { Box, Container } from '@mui/system';
//import createTheme for custom font
import { createTheme, ThemeProvider} from '@mui/material';
//import AddTodoForm 
import AddTodoForm from './components/AddTodoForm'
//import todo list component
import TodoList from './components/TodoList'

//new mui theme for custom font
const theme = createTheme({
  typography: {
    fontFamily: 'Quicksand',
    fontWeight: '700',
    fontSize: 16
    
  }
})

function App() {
  //theme provider for theme, container with sx props and components
  return (
      <div className="App"> 
        <ThemeProvider theme={theme}>
          <Container sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '90vh',
            mx: 'auto'
          
          }}>
          
              <h1 style={{fontFamily: 'Quicksand'}}>To Do List</h1>
              <AddTodoForm />
              <TodoList />
          </Container>
        </ThemeProvider>
      </div>
  );
}

export default App;
