import './App.css';
import {useState} from "react";
import InputForm from './components/InputForm';
import {Route,Routes} from "react-router-dom";
import Incomplete from './components/Incomplete';
import Complete from './components/Complete'; 
import NavBar from './components/NavBar';

function App() {
  
  const[incList,setIncList] = useState([])
  const [compList,setCompList] = useState([])
  
  function addItemHandler(value){
    
    setIncList(prevState=>
       [value,...prevState]
    )
  }
  function tickItemHandler(value,index){
    incList.splice(index,1)
    setIncList(incList)
    setCompList(prevState=>
       [value,...prevState]
    )
  }

 
  function removeItem(value,index){
    compList.splice(index,1)
    setCompList(compList)
    setIncList(prevState=>
      [value,...prevState]
   )

  }
  console.log(compList)
  return (
    <div className="homepage">
    <NavBar></NavBar>
    <h1>
      To Do List
    </h1>
    
    <Routes>
      
      <Route path='/' element={<InputForm onAddItem = {addItemHandler}/>}> </Route>
      <Route path="complete" element={<Complete completedList = {compList} onAddItem={addItemHandler} onRemoveItem={removeItem}/>}></Route>
      <Route path="incomplete" element={<Incomplete taskList = {incList}  onAddItem={addItemHandler} onTickItem ={tickItemHandler} ></Incomplete>}></Route>
      
    </Routes>
    </div>
  );
}
export default App;