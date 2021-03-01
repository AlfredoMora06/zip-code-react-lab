import React, { Component } from 'react';
import './App.css';


function City(props) {
  return (
    <div>
      This is the City component
    </div>
  );
}

function ZipSearchField({ onZipChange }) {
  return (
    <div>
      <label>Zip Code:</label>
      <input type="text" onChange={onZipChange} />
    </div>
  );
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zipCode: '',
      cities: [],
    }
  }

  zipChanged(e) {
    // Make GET request for the zip resource
    // then, when you receive the result, store it in state
    fetch('PUT_URL_HERE')
      .then()
      .then()

    this.setState({
      zipCode: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Zip Code Search</h2>
        </div>
        <ZipSearchField onZipChange={(e) => this.zipChanged(e)} />
        <div>
          {/*
            Instead of hardcoding the following 3 cities,
            Create them dynamically from this.state.cities
          */}
          <City />
          <City />
          <City />
        </div>
      </div>
    );
  }
}

export default App;