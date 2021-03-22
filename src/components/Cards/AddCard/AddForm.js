import React, {useState} from "react";
import {useHistory, useParams} from "react-router-dom";
import { createCard } from "../../../utils/api/index";

function AddForm() {
  
  const history = useHistory();
  const {deckId} = useParams();

  const [front, setFront] = useState([]);
  const [back, setBack] = useState([]);

  function handleFront(event) {
    setFront({...front, "front": event.target.value});
  }

  function handleBack(event) {
    setBack({...back, "back": event.target.value});
  }
  
  return (
    <>
      <h1>Add Card</h1>
      <form>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Front:</label>
          <textarea className="form-control" id="front" rows="3" placeholder="Front side of card" onChange={handleFront}></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Back:</label>
          <textarea className="form-control" id="back" rows="3" placeholder="Back side of card" onChange={handleBack}></textarea>
        </div>
        <button type="button" className="btn btn-secondary mr-1" onClick={() => history.push("/")}>Cancel</button>
        <button 
          type="button"
          className="btn btn-primary"
          onClick={() => {
            history.push(`/decks/${deckId}`)
            createCard(parseInt(deckId), {...front, ...back});
          }
          }>
          Submit
        </button>
      </form>
    </>
  )
}

export default AddForm;