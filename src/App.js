import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const App=()=> {
  const[inputList,setInputList]=useState("");
  const [Items,setItems]=useState([]);
  const itemEvents=(event)=>{
    setInputList(event.target.value);

  };
  const listofItems = () =>{
    setItems((oldItems)=> {
      return [...oldItems, inputList]; 
      
    });
    setInputList("");
  };
  const deleteItems=() => {
    console.log("deleted");

  };
  return(
   <>
    <div className="main_div">
       <div className="center_div">
         <br />
         <h1> Todo List </h1>
         <br />
          <input type="text" placeholder="Add Items"
          value={inputList}
          onChange={itemEvents}/>
          <button onClick={listofItems}>+ </button>
          
          <ol>
            {Items.map((itemval)=> {
              return<li>{itemval}</li>
              
            })}
            
          </ol>
          
        </div>
        
     
     
      
      </div>
      
    </>
  );
    







};

export default App;
