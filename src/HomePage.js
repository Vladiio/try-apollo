import React, { Component } from "react";

import DogsList from "./components/DogsList";
import DogPhote from "./components/DogPhoto";

class HomePage extends Component {
  state = {
    selectedBreed: null
  };

  onSelectBreed = selectedBreed => {
    this.setState({ selectedBreed });
  };

  render() {
    const { selectedBreed } = this.state;
    return (
      <div>
        <DogsList onSelectBreed={this.onSelectBreed} />
        {selectedBreed && <DogPhote breed={selectedBreed} />}
      </div>
    );
  }
}

export default HomePage;
