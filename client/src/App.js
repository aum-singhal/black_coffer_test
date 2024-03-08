import { useEffect, useState } from 'react';
import './App.css';
import LineGraph from './components/lineChart';
import BarGraph from './components/barChart';
import PieGraph from './components/pieChart';
import { cityOccurrences, countryOccurrences, intensityOccurrences, likelihoodOccurrences, relevanceOccurrences, topics } from './data';

function countOccurrences(data, field) {
  const occurrences = {};
  let array = [];
  data.forEach(entry => {
      const value = entry[field];
      if (value in occurrences) {
          occurrences[value]++;
      } else {
          occurrences[value] = 1;
      }
  });
  console.log(occurrences);
  Object.keys(occurrences).forEach(key => {
      array.push({name: key, value: occurrences[key]});
  });
  return array;
}

function App() {
  const [select, setSelect] = useState(0);
  // const [jsonData, setJsonData] = useState(null);
  // const [intensityOccurrences, setIntensity] = useState(null);

  // useEffect(() => {
  //   fetch('jsondata.json')
  //     .then(response => {
  //       if (!response.ok) {
  //           throw new Error('Network response was not ok');
  //       }
  //       console.log(response)
  //     })
  //     .then(data => {
  //       setJsonData(data);
  //       console.log(data)
  //     })
  //     .catch(error => {
  //       console.error('Error fetching the JSON file:', error);
  //     });
  // }, []);

  // useEffect(()=>{
  //   if(jsonData != null){
  //     setIntensity(countOccurrences(jsonData, 'intensity'))
  //   }
  // }, [jsonData])
  console.log(cityOccurrences)
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
          <div className='item'><LineGraph data={cityOccurrences} title={"City"} /></div>
          <div className='item'><BarGraph data={topics} title={"topics"} /></div>
          <div className='item'><PieGraph data={intensityOccurrences} title={"Intensity"} /></div>
          <div className='item'><LineGraph data={likelihoodOccurrences} title={"Likelihood"} /></div>
          <div className='item'><BarGraph data={relevanceOccurrences} title={"Relevance"} /></div>
          <div className='item'><PieGraph data={countryOccurrences} title={"country "} /></div>
        </div>
      </div>

      {/* <form className='form' method='POST' action='http://localhost:8080/postdata'>
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
      </form> */}
    </div>
  );
}

export default App;
