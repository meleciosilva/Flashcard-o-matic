import React, {useEffect, useState} from "react";
import { updateDeck, readDeck } from "./../../../utils/api";
import {useHistory} from "react-router-dom";

function EditForm({deck}) {
  const history = useHistory();

  const [name, setName] = useState({"name": deck.name});
  const [description, setDescription] = useState({"description": deck.description});

  useEffect(() => {
    readDeck(deck.id);
  })

  function handleName(event) {
    setName({...name, "name": event.target.value});
  }

  function handleDescription(event) {
    setDescription({...description, "description": event.target.value});
  }

  return (
    <>
      <h1>Edit Deck</h1>
      <form>
        <div className="form-group">
          <label for="exampleFormControlInput1">Name:</label>
          <input type="text" className="form-control" id="name" value={name.name} onChange={handleName}/>
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Description:</label>
          <textarea className="form-control" id="description" rows="3" value={description.description} onChange={handleDescription}></textarea>
        </div>
        <button type="button" className="btn btn-secondary mr-1" onClick={() => history.push("/")}>Cancel</button>
        <button 
          type="button"
          className="btn btn-primary"
          onClick={() => {
            updateDeck({"id": deck.id, ...name, ...description});
            history.push("/");
          }
          }>
          Submit
        </button>
      </form>
    </>
  )
}

export default EditForm;