// Write your Character component here
import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'

function Character(props) {
    const { currentFriend } = props





    return (
        <div className='character'>
            <h3>{currentFriend.name}</h3>
            <p>{currentFriend.species}</p>
            <p>{currentFriend.origin.name}</p>
        </div>
    )
}

export default Character