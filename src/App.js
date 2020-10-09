import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Character from './components/Character'
import Dance from './components/Dance'
import styled from 'styled-components'



const StyledCharacterSection = styled.div`
  display: flex;
  width: 100%;
  flex-flow: row wrap;

`





const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  
  const [characterArray, setCharacterArray] = useState([])

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    const fetchCharacter = () => {
      axios.get('https://rickandmortyapi.com/api/character/')
        .then(res => {
          setCharacterArray(res.data.results);
          })
        .catch(err => {
          debugger
        });
    }
    fetchCharacter()
  }, [])




  return (
    <div className="App">
      <h1 className="Header">Rick and Morty Characters</h1>
      <StyledCharacterSection>
        {
          characterArray.map(char => {
            return <Character key={char.id} currentFriend={char} />
          })
        }
      </StyledCharacterSection>
      <Dance />
    </div>
  );
}

export default App;
