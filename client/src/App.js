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

      <form className='form' method='POST' action='http://localhost:8080/postdata'>
        <input type='text' name='end_year' id='end_year' placeholder='end year' />
        <input type='number' name='intensity' id='intensity' placeholder='intensity' />
        <input type='text' name='sector' id='sector' placeholder='sector' />
        <input type='text' name='topic' id='topic' placeholder='topic' />
        <input type='text' name='insight' id='insight' placeholder='insight' />
        <input type='text' name='url' id='url' placeholder='url' />
        <input type='text' name='region' id='region' placeholder='region' />
        <input type='text' name='start_year' id='start_year' placeholder='start year' />
        <input type='text' name='impact' id='impact' placeholder='impact' />
        <input type='text' name='added' id='added' placeholder='added' />
        <input type='text' name='published' id='published' placeholder='published' />
        <input type='text' name='country' id='country' placeholder='country' />
        <input type='number' name='relevance' id='relevance' placeholder='relevance' />
        <input type='text' name='pestle' id='pestle' placeholder='pestle' />
        <input type='text' name='source' id='source' placeholder='source' />
        <input type='text' name='title' id='title' placeholder='title' />
        <input type='number' name='likelihood' id='likelihood' placeholder='likelihood' />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
