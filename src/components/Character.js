// Write your Character component here
import React from 'react';
import styled from 'styled-components'

const StyledDiv = styled.div`
display:flex;
justify-content:start;
font-size:1.5rem;
color:purple;
background-color:#97ce4c;
border: 1px solid black;
width:60%;
margin:2% auto;
`
const StyledDivTwo = styled.div`
flex-direction:column;
width:33%;
`
const StyledDivThree = styled.div`
display:flex;
flex-direction:column;
text-align:start;
padding:6%;
`
const StyledP = styled.p`
color:#44281d;
`
const StyledImgDiv = styled.div`
display:flex;
justify-content:center;
`
const StyledH2 = styled.h2`
flex-wrap:wrap;
color:#44281d;
`
export default function CharacterCard(props){
const { status, species, location, name, image, origin } = props

console.log(props)

return (
    <StyledDiv>
        <StyledDivTwo>
        <StyledH2>{name} </StyledH2>
        <StyledImgDiv>
        <img src = {image} ></img>
        </StyledImgDiv>
        </StyledDivTwo>
        <StyledDivThree>
        <StyledP>Status: {status}</StyledP>
        <StyledP>Origin: {origin}</StyledP>
        <StyledP>Species: {species}</StyledP>
        <StyledP>Current location: {location}</StyledP>
        </StyledDivThree>
    </StyledDiv>
)
}