import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Shipments from './components/shipments';
import ShipmentDetails from './components/shipmentDetails';
import NotFound from './components/common/not-found';
import Home from './components/home';




function App() {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">Freighthub Task</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

      </nav>
    
        <main className="container">
          <Switch>
            <Route path='/shipments/:id' component={ShipmentDetails} />
            <Route path='/not-found' component={NotFound} />
            <Route path='/shipments' component={Shipments}  />
            <Route path='/' exact component={Home} />
            <Redirect to="not-found" />

          </Switch>


        </main>
     

    </React.Fragment>

  );
}

export default App;
