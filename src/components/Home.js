import React, { Component } from 'react';
import { Header, Button, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import got from '../images/got.jpg'

class Home extends Component {
  render() {
    return (
      <div>
        <Header as='h1' textAlign='center'>GAME OF THRONES</Header>
        <Button>
          <Link to='/episodes'>Episodes</Link>
        </Button>
        <Button>
          <Link to='/characters'>Characters</Link>
        </Button>
        <Image src={got} centered bordered/>
      </div>
    );
  }
}

export default Home;
