// Write your Character component here
import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'

function Character(props) {
    const { currentFriend } = props

const StyledCharacterBox = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-items: center;    
    justify-content: space-between;
    background-color: ${props => props.theme.white};
    width: 40%;
    margin: 2%;
    padding: 1% 2%;
    border: 3px solid ${props => props.theme.primaryColor};
    border-radius: 10px;
    opacity: .8;
    transition: all 0.2s ease-in-out;
    box-shadow: 2px 2px 6px 5px rgba(255,255,255,0.5);

    &:hover {
        opacity: 1;

        h3{
            color: ${props => props.theme.secondaryColor};
            transition: all 0.1s ease-in-out;
        }
    }

    

    & > img {
        max-width: 25%;
    }

`


const StyledCharacterText = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    text-align: right;
    color: ${props => props.theme.black};
    & > p {
        margin: 0;
    }


`


    return (

        <StyledCharacterBox>
            <img src={currentFriend.image} alt={currentFriend.name} />
            <StyledCharacterText>
                <h3>{currentFriend.name}</h3>
                <p>{currentFriend.species}</p>
                <p>{currentFriend.origin.name}</p>
            </StyledCharacterText>
        </StyledCharacterBox>
    )
}

export default Character