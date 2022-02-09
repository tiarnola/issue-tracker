import React from 'react';
//import React, {useState, useEffect} from 'react';
import './CurrentIssue.css'

function CurrentIssue() {
  //const [addIssue, setAddIssue] = useState(true)
  return (
    <div className="current-issues">
      <div className="indv-issue"> 
        <p className="close-issue">Close Issue</p>
        <p>Assigned<span>Username</span></p>
        <p>Priority<span>Username</span></p>
        <p>Description</p>
        <p className="description-text">
          Short Description of issue at hand.
          Short Description of issue at hand.
          Short Description of issue at hand.
        </p>
        <hr></hr>
      </div>
      <div className="indv-issue"> 
        <p className="close-issue">Close Issue</p>
        <p>Assigned<span>Username</span></p>
        <p>Priority<span>Username</span></p>
        <p>Description</p>
        <p className="description-text">
          Short Description of issue at hand.
          Short Description of issue at hand.
          Short Description of issue at hand.
        </p>
        <hr></hr>
      </div>
      <div className="indv-issue"> 
        <p className="close-issue">Close Issue</p>
        <p>Assigned<span>Username</span></p>
        <p>Priority<span>Username</span></p>
        <p>Description</p>
        <p className="description-text">
          Short Description of issue at hand.
          Short Description of issue at hand.
          Short Description of issue at hand.
        </p>
        <hr></hr>
      </div>
      
    </div>
  );
}

export default CurrentIssue;