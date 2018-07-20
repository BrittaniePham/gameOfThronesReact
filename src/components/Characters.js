import React, { Component } from 'react';
import { Header, Container, Segment, Card } from 'semantic-ui-react'
import { getCharacters } from '../reducers/episodes'
import { connect } from 'react-redux'

class Characters extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(getCharacters())
  }

  render() {
    return (
      <Container textAlign='center'>
        <Header as='h1' textAlign='center'>Game of Thrones Characters</Header>
        {/* {this.props.characters.map( chara => 
          <Segment key={chara.id}>
            <Header as='h2'>{chara.name}</Header>
            <p>director: {chara.director}</p>
            <p>Predecessor: {chara.predecessor}</p>
            <p>season: {chara.season}</p>
            <p>successor: {chara.successor}</p>
          </Segment>
        )} */}
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return { characters: state.characters }
}

export default connect(mapStateToProps)(Characters)