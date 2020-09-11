import React, {useState , useEffect} from 'react';
import './App.css';
import axios from 'axios'
import styled from 'styled-components'
import CharacterCard from './components/Character';



const App = () => {

  const [character, setCharacter] = useState([])
  const [currentCharacterId, setCurrentCharacterId] = useState('1')
  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character`)
      .then(res => {
        setCharacter(res.data.results)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const openDetails = id => {
    setCurrentCharacterId(id)
  }

  const closeDetails = () => {
    setCurrentCharacterId(null)
  }

  const StyledH1 = styled.h1`
  margin:0 auto;
  padding:2%;
  font-size: 4rem;
  color:#97ce4c;
  `

  return (
    <div className="App">
      <StyledH1 className="Header">Rick And Morty Characters</StyledH1>
      {
    character.map(item => {
      return <CharacterCard key = {item.id} status = {item.status} species = {item.species} location = {item.location.name} name = {item.name} image = {item.image} origin = {item.origin.name}/>
    })
  }
  );
    </div>
  );
}

export default App;
