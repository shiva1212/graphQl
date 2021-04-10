import React, {useState,useCallback} from 'react';
import logo from './logo.svg';
import LaunchList from './components/LaunchList';
import LaunchProfile from './components/LaunchProfiler';

import './App.css';

function App() {
  const [id, setId] = useState(42)
  const handleIdChange = useCallback(newId => {
    setId(newId);
  },[])
  return (
    <div className="App">
      <LaunchList handleIdChange = {handleIdChange}/>
      <LaunchProfile id = {id}/>
    </div>
  );
}

export default App;
