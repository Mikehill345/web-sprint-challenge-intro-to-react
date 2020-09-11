// import React, {useState , useEffect} from 'react';
// import styled from 'styled-components'
// import axios from 'axios'


// const StyledDivThree = styled.div`
// display:flex;
// flex-direction:column;
// justify-content:center;
// text-align:start;
// `
// export default function CharacterDetails(props){
//     const { status, species, location, origin } = props

//     const [character, setCharacter] = useState([])
//     const [currentCharacterId, setCurrentCharacterId] = useState('1')


//     useEffect(() => {
//       axios.get(`https://rickandmortyapi.com/api/character`)
//         .then(res => {
//           setCharacter(res.data.results)
//         })
//         .catch(err => {
//           console.log(err)
//         })
//     }, [])
    
//     console.log(props)
    
//     return (
//             <StyledDivThree>
//             <p>Status: {status}</p>
//             <p>Origin: {origin}</p>
//             <p>Species: {species}</p>
//             <p>Current location: {location}</p>
//             </StyledDivThree>
//     )
//     }
