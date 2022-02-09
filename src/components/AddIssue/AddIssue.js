import React from 'react';
//import React, {useState, useEffect} from 'react';
import "./AddIssue.css"

function AddIssue() {
  //const [addIssue, setAddIssue] = useState(true)
  return (
    <div className="add-issue">
      <form>
          <label>Description<input type="text" placeholder="Description of Issue..."/></label>
          <label>Assign To
          <select name="forDev" id="forDev">
             <option value="Mark">Mark</option>
              <option value="Ken">Ken</option>
              <option value="Sinead">Sinead</option>
              <option value="Ciara">Ciara</option>
          </select>
          </label>

          <label>Priority
          <select name="forDev" id="forDev">
             <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
              <option value="Extra-High">Extra-High"</option>
          </select>
          </label>
          <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddIssue;