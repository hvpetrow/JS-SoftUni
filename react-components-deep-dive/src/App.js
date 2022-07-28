import './App.css';
import ToDoList from './components/ToDoList';

function App() {
  // let numbers = [1,2,3,4,5,6];
  // //This example with unique indexes is only for training projects(its wrong). It shouldnt be used in real projects because the array can changed !!!
  // let mappedNumbers = numbers.map((n,i) => <li key={i}>{n}</li>); //unique key(id key must be used) must come from database(id);


  return (
    <div className="site-wrapper">
      <ToDoList/>
    </div>
  );
}

export default App;
