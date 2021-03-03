import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container, Row, Col } from 'react-bootstrap';



function City(props) {
  return (
    <div>
      This is the City component
    </div>
  );
}

function ZipSearchField({ onZipChange }) {
  return (
    <div className="text-center" >
      <label className="pr-4"><h5><strong>Zip Code: </strong></h5></label>
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
      states: [],
    }
  }

  zipChanged(e) {

    this.setState({
      zipCode: e.target.value
    })

    let url = "http://ctp-zip-api.herokuapp.com/zip/" + this.state.zipCode;
    // Make GET request for the zip resource
    // then, when you receive the result, store it in state
    fetch(url)
      .then((response) => response.json())
      .then(jsonResponse => {
        let result = jsonResponse.map(o => ({ city: o.City }));
        let estados = jsonResponse.map(o => ({ estado: o.State }));

        this.setState({
          cities: result,
          states: estados,
        })
      });
  }

  render() {
    const cit = this.state.cities
    const stat = this.state.states
    return (
      <div className="App">
        <div className="App-header">
          <h2>Zip Code Search</h2>
        </div>
        <Container className="py-5">
          <Row className="justify-content-center">
            <Col className="col-6">
              <ZipSearchField onZipChange={(e) => this.zipChanged(e)} />
            </Col>
          </Row>
        </Container>
        <div>
          {
            cit.map((ciudad, st) =>

              < div >
                <Container className="py-3">
                  <Row className="justify-content-center">
                    <Col className="col-6">
                      <Card>
                        <Card.Header>
                          <p>{ciudad['city']}, {stat[st]['estado']}</p>
                        </Card.Header>
                        <Card.Body>
                          <ul>
                            <li>Stuff Goes Here</li>
                          </ul>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Container>
              </div>,
            )




            /*
              Instead of hardcoding the following 3 cities,
              Create them dynamically from this.state.cities
            */
          }


        </div>


      </div >
    );
  }
}

export default App;