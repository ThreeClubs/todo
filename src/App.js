// CSS
import './App.css';
// COMPONENTS
import Header from "./components/Header"
import TaskField from "./components/TaskField";
import TaskList from "./components/TaskList";


function App() {
  return (
    <div className='container'>
      <Header></Header>
      <TaskField></TaskField>
      <TaskList></TaskList>
    </div>
  )
}

export default App;
