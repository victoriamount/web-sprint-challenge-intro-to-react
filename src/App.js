import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import dummyData from './dummyData'
import Character from './components/Character'

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
      <h1 className="Header">Characters</h1>
      {
        characterArray.map(char => {
          return <Character currentFriend={char} />
        })
      }
    </div>
  );
}

export default App;
