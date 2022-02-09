import React, {useState} from 'react';
//import React, {useState, useEffect} from 'react';
import AddIssue from './components/AddIssue/AddIssue.js';
import CurrentIssue from './components/CurrentIssue/CurrentIssue.js';
import './App.css';

function App() {
  const [addIssue, setAddIssue] = useState(true);

  function showCurrentIssues(){
    setAddIssue (false);
  }

  function showAddIssue(){
    setAddIssue (true);
  }



  return (
    <div className="App">
      <h1>Issue Tracker</h1>
      <div className="grey-card-container">
        { addIssue ? <AddIssue/> : <CurrentIssue/>}
        </div>
      <div class="view-selection-div">
        <button class="view-button" onClick={() => showCurrentIssues()}>Current Issues</button>
        <button class="view-button active-button" onClick={() => showAddIssue()} >Add Issue</button>
      </div>
    </div>
  );
}

export default App;
 