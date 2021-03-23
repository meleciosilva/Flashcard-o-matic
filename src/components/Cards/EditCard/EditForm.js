import React, {useState, useEffect} from "react";
import { updateCard, readCard} from "./../../../utils/api";
import {useHistory, useParams} from "react-router-dom";

function EditForm({deck}) {
  const history = useHistory();
  const {cardId} = useParams();

  const [front, setFront] = useState([]);
  const [back, setBack] = useState([]);

  useEffect(() => {
    async function fetchCard() {
      const response = await readCard(cardId);
      const cardFront = {"front": response.front};
      const cardBack = {"back": response.back};
      setFront(cardFront);
      setBack(cardBack);
    }
    fetchCard();
  }, [cardId])

  function handleFront(event) {
    setFront({...front, "front": event.target.value});
  }

  function handleBack(event) {
    setBack({...back, "back": event.target.value});
  }

  return (
    <>
      <h1>Edit Card</h1>
      <form>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Front:</label>
          <textarea className="form-control" id="description" rows="3" value={front.front} onChange={handleFront}></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea2">Back:</label>
          <textarea className="form-control" id="description" rows="3" value={back.back} onChange={handleBack}></textarea>
        </div>
        <button type="button" className="btn btn-secondary mr-1" onClick={() => history.push(`/decks/${deck.id}`)}>Cancel</button>
        <button 
          type="button"
          className="btn btn-primary"
          onClick={() => {
            updateCard({"id": cardId, "deckId": deck.id, ...front, ...back});
            history.push(`/decks/${deck.id}`);
          }
          }>
          Submit
        </button>
      </form>
    </>
  )
}

export default EditForm;