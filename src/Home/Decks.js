import React from "react";

function Decks() {

  const deckContent = 
    <div class="col-sm-6">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  

  return (
    <div class="row">
      {deckContent}
    </div>
  )
}

export default Decks;