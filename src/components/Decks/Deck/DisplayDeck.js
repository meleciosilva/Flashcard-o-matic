import React from "react";
import {Link, useHistory, useRouteMatch} from "react-router-dom";
import { deleteDeck } from "./../../../utils/api";
// import EditDeck from "../EditDeck/EditDeck";


function DisplayDeck({deck}) {
  const history = useHistory();
  const {url} = useRouteMatch();
  
  return (
    <div className="col-sm-12">
      <div className="card" style={{border: "none"}}>
        <div className="card-body">
          <h5 className="card-title">{deck.name}</h5>
          <p className="card-text">{deck.description}</p>
          <div className="d-flex justify-content-between">
            <div>
              <Link to={`${url}/edit`} className="btn btn-secondary mr-1">Edit</Link>
              <Link to={`${url}/study`} className="btn btn-primary mr-1" onClick={() => {

                }}>
                  Study
              </Link>
              <Link className="btn btn-primary"><strong>+ Add Cards</strong></Link>
            </div>
            <div>
              <Link className="btn btn-danger" onClick={() => {
                      if (window.confirm("Are you sure you want to delete this deck?")) {
                        deleteDeck(deck.id);
                        history.push("/");
                      } else {
                        history.push(`${url}`);
                      }
                    }
                  }>
                    Delete
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  
}

export default DisplayDeck;