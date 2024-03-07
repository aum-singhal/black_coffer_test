import { useEffect, useState } from 'react';
import './App.css';
import LineGraph from './components/lineChart';
import BarGraph from './components/barChart';
import PieGraph from './components/pieChart';

function App() {
  const [select, setSelect] = useState(0);
  // useEffect(()=>{
  //   const data = fetch("http://localhost:8080/fetchall").then(res=>console.log(res))
  // }, [])
  return (
    <div className="App">
      <div className='header'>
        BlackCoffer
      </div>

      <div className='flex'>
        <div className='side-tab'>
          <div onClick={()=>setSelect(0)} className={`item ${select===0?"selected":""}`}>Dashboard</div>
          <div onClick={()=>setSelect(1)} className={`item ${select===1?"selected":""}`}>Users</div>
          <div onClick={()=>setSelect(2)} className={`item ${select===2?"selected":""}`}>Data</div>
        </div>

        <div className='main-area'>
          <div className='item'><LineGraph /></div>
          <div className='item'><BarGraph /></div>
          <div className='item'><PieGraph /></div>
          <div className='item'><LineGraph /></div>
          <div className='item'><BarGraph /></div>
          <div className='item'><PieGraph /></div>
        </div>
      </div>
    </div>
  );
}

export default App;
