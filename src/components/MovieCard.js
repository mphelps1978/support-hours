import React from "react";
import styled from 'styled-components'

const MovieCard = (props) => {
    console.log(props)

   const Container = styled.div `
    width: 30%;
    border: 1px solid black;
    padding-top: 20px;
    padding-bottom: 20px;
   ` ;

   const Title = styled.h3 `
   font-weight: bold;
   `;


    return (
      <Container>
          <img src = {`http://image.tmdb.org/t/p/w185/${props.photo}`}/>
          <Title>Title: {props.title}</Title>
          <p>Description: {props.description}</p>
          <p>Popularity: {props.popularity}</p>



      </Container>
    )

}

export default MovieCard