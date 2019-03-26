import React, { Component } from "react";
import { Button } from "react-bootstrap";
import uuid from "uuid";

class App extends Component {
  constructor() {
    super();
    this.state = {
      gifts: []
    };
  }
  addGift = () => {
    const { gifts } = this.state;
    gifts.push({ id: uuid.v4() });
    this.setState({
      gifts
    });
  };
  renderGifts = () => {
    return this.state.gifts.map(gift => <div key={gift.id}>gift</div>);
  };
  render() {
    return (
      <div>
        <h2>Gift Giver</h2>
        <div className="gift-list">{this.renderGifts()}</div>
        <Button className="btn-add" onClick={this.addGift}>
          Add gift
        </Button>
      </div>
    );
  }
}

export default App;
