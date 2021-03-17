import DisplayDeck from "./DisplayDeck";
import DisplayCards from "./DisplayCards";

function ViewDeck({deck, cards}) {
  return (
    <div className="row">
      <DisplayDeck deck={deck} />
      <DisplayCards cards={cards}/>
    </div>
  )
}

export default ViewDeck;