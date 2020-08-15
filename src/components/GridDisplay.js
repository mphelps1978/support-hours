import React, {useState, useEffect} from 'react';
import axios from 'axios'
import MovieCard from './MovieCard'
import styled from 'styled-components'


const GridDisplay = () => {
    const [nowPlaying, setNowPlaying] = useState([])


  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=2e5432f23ecc308a871ce35ce607c8fb')
    .then (response => {
      console.log(response.data.results);
      setNowPlaying(response.data.results);
    })
    .catch (err => {
      console.log("error")
    })
  }, [])

  const MainContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  `;


  return (
    <div>
      {nowPlaying.map(item => {
        return (
          <MainContainer>
            <MovieCard
            title = {item.title}
            popularity = {item.popularity}
            description = {item.overview}
            photo = {item.poster_path}
            />
          </MainContainer>
        )
      })}



    </div>
  )
}

export default GridDisplay


