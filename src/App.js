import { useState } from 'react';
import userEvent from '@testing-library/user-event';
import './App.css';



function App() { 
  const [data,setData]=useState(0);

function updateData()
{
 setData(data+1);
}

  return (
    <div className="App">
      <h1>STATE IN REACT</h1>
      <h1>{data}</h1>
       <button onClick={updateData}>updateData.</button>  
     </div>
  ); 
}

export default App;
