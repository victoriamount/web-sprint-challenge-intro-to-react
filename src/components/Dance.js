import React from 'react'
import styled, { keyframes } from 'styled-components'

// Source: https://codepen.io/stanko/pen/GbBqwZ

const mortyAnimation = keyframes`
  100% {
    transform: translateX();
    /* make -100 to keep working on animation */
  }

`

const StyledAnimation = styled.div`   


.Animation {
  margin: 0 auto;
  max-width: 520px;
  overflow: hidden;
  margin-bottom: 20px;
}

.Animation-frames {
  animation: ${mortyAnimation} 600ms infinite;
  animation-timing-function: steps(12);
  display: flex;
  width: 12 * 100%; 
  background: #499271;
}

.Animation-frame {
  display: block;
  width: 100% / 12;
  max-width: 100% / 12;
  flex-basis: 100% / 12;
  
  img {
    width: 100%;
  }
}

//////////////////////////////////////////////
// Typography
//////////////////////////////////////////////
body {
  background: #f4f5fa;
  padding: 20px;
  font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  text-align: center;
}

a {
  font-size: 14px;
  color: #999;
  text-decoration: none;
  border-bottom: 1px solid #ccc;
  transition: all 250ms;
  
  &:hover {
    color: #777;
    border-bottom: 1px solid #555;
  }
}

`



const Dance = () => {





    return (
        <StyledAnimation>
            <div class="Animation-frames">
                <div class="Animation-frame"><img src="https://muffinman.io/public/img/rm/frame_00.png" /></div>
                <div class="Animation-frame"><img src="https://muffinman.io/public/img/rm/frame_01.png" /></div>
                <div class="Animation-frame"><img src="https://muffinman.io/public/img/rm/frame_02.png" /></div>
                <div class="Animation-frame"><img src="https://muffinman.io/public/img/rm/frame_03.png" /></div>
                <div class="Animation-frame"><img src="https://muffinman.io/public/img/rm/frame_04.png" /></div>
                <div class="Animation-frame"><img src="https://muffinman.io/public/img/rm/frame_05.png" /></div>
                <div class="Animation-frame"><img src="https://muffinman.io/public/img/rm/frame_06.png" /></div>
                <div class="Animation-frame"><img src="https://muffinman.io/public/img/rm/frame_07.png" /></div>
                <div class="Animation-frame"><img src="https://muffinman.io/public/img/rm/frame_08.png" /></div>
                <div class="Animation-frame"><img src="https://muffinman.io/public/img/rm/frame_09.png" /></div>
                <div class="Animation-frame"><img src="https://muffinman.io/public/img/rm/frame_10.png" /></div>
                <div class="Animation-frame"><img src="https://muffinman.io/public/img/rm/frame_11.png" /></div>
            </div>
        </StyledAnimation>
    )
}
export default Dance;