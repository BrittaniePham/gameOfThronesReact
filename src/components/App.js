import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Flash from './Flash';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';
import { Segment, Image } from 'semantic-ui-react';
import Episodes from './Episodes';
import Characters from './Characters';
import styled from 'styled-components'

const AppContainer = styled.div`
  background: linear-gradient(to bottom right, aliceblue, black);
`

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Segment basic>
          <NavBar />
          <Flash />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/episodes' component={Episodes}/>
              <Route exact path='/characters' component={Characters}/>
              <Route component={NoMatch} />
            </Switch>
        </Segment>
      </AppContainer>
    );
  }
}

export default App;
