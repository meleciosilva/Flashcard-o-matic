import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import { createDeck } from "../../../utils/api/index";

function CreateForm() {
  
  const history = useHistory();

  const [name, setName] = useState([]);
  const [description, setDescription] = useState([]);

  function handleName(event) {
    setName({...name, "name": event.target.value});
  }

  function handleDescription(event) {
    setDescription({...description, "description": event.target.value});
  }
  
  return (
    <>
      <h1>Create Deck</h1>
      <form>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Name:</label>
          <input type="text" className="form-control" id="name" placeholder="Deck Name" onChange={handleName}/>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Description:</label>
          <textarea className="form-control" id="description" rows="3" placeholder="Brief Description of Deck" onChange={handleDescription}></textarea>
        </div>
        <button type="button" className="btn btn-secondary mr-1" onClick={() => history.push("/")}>Cancel</button>
        <button 
          type="button"
          className="btn btn-primary"
          onClick={() => {
            history.push("/")
            createDeck({...name, ...description});
          }
          }>
          Submit
        </button>
      </form>
    </>
  )
}

export default CreateForm;