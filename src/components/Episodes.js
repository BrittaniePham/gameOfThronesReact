import React, { Component } from 'react';
import { Header, Container, Segment } from 'semantic-ui-react'
import { getEpisodes } from '../reducers/episodes'
import { connect } from 'react-redux'


class Episodes extends Component {

  async componentDidMount() {
    const { dispatch } = this.props
    await dispatch(getEpisodes())
  }

  componentDidUpdate(prevProps) {
    if(prevProps !== this.props){
      const { dispatch } = this.props
      dispatch(getEpisodes())
    }
  }

  displayCharacters = () => {
    // if (this.props.episodes.length > 1 )
    {this.props.episodes.map( epi => 
      <Segment key={epi.id}>
        <Header as='h2'>{epi.name}</Header>
        <p>director: {epi.director}</p>
        <p>Predecessor: {epi.predecessor}</p>
        <p>season: {epi.season}</p>
        <p>successor: {epi.successor}</p>
        <div>
          <Header as='h3'>Characters:</Header>
          {epi.characters.map( char => 
          <span>
            {char},
          </span>
        )}
        </div>
      </Segment>
    )}
  }



  render() {
    return (
      <Container textAlign='center'>
        <Header as='h1' textAlign='center'>Game of Thrones Episodes</Header>
          {this.displayCharacters()}
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return { episodes: state.episodes }
}

export default connect(mapStateToProps)(Episodes)