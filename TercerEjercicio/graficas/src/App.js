import React from 'react';
import './App.css';
import { total_amount } from './circleData'
import { approved, rejeted, pending } from './lineData'
import { CircleGraph } from './component/CircleGraph'
import { LineGraph } from './component/LineGraph'

function App() {
 
  return (
    <div className="App">
     <CircleGraph total_amount={total_amount}/>
     <LineGraph 
      approved={approved}
      rejeted={rejeted}
      pending={pending}
    />
    </div>
  );
}

export default App;
