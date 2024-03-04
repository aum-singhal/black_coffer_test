import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(()=>{
    const data = fetch("http://localhost:8080/fetchall").then(res=>console.log(res))
  }, [])
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
