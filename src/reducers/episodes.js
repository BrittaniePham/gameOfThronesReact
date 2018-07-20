import { setFlash } from './flash'
import axios from 'axios'

const EPISODES = 'EPISODES'
const CHARACTERS = 'CHARACTERS'

export const getEpisodes = () => {
  return (dispatch) => {
    axios.get('https://api.got.show/api/episodes/')
      .then( res => {
        dispatch({ type: EPISODES, episodes: res.data })
      })
      .catch(err => {
        console.log(err.response)
      })
  }
}

export const getCharacters = () => {
  return (dispatch) => {
    axios.get('https://api.got.show/api/characters/')
      .then( res => {
        console.log(res.data)
        dispatch({ type: CHARACTERS, characters: res.data })
      })
      .catch(err => {
        console.log(err.response)
      })
  }
}


export default ( state = [], action ) => {
  switch ( action.type ){
    case EPISODES:
      return action.episodes
    case CHARACTERS:
      return action.characters
    default:
      return state
  }
}
