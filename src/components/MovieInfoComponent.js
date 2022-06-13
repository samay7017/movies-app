import axios from 'axios';
import React , {useState ,useEffect} from 'react';
import styled from 'styled-components';
const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin: 20px;
    padding: 20px 30px;
    justify-content : center;
    border-bottom: 1px solid lightgray;
    box-shadow: 0px 0px 10px 7px gray;
    border-radius : 3px;
`;
const Poster = styled.img`
border: 5px solid black;
outline : 5px solid grey;
width: 220px;
border-radius : 3px;
height: 300px;
`;
const MovieInfo = styled.div`
    display:flex;
    margin:20px;
    flex-direction: column;
`;
const Line = styled.span`
    font-size: 18px;
    font weight : 500;
    color: black;
    margin:5px 15px;
    text-transform : capitalize;
    text-overflow:ellipsis;
    overflow: hidden;
`;
const Title= styled.span`
    font-size:22px;
    font-weight:600;
    color: black;
    margin: 15px;
    white-space:nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-transform: capitalize;
`;
const Close  = styled.span`
font-size:16px;
font-weight:600;
color:black;
background:lightgrey;
height:fit-content;
padding:8px;
border-radius:50%;
cursor:pointer;
opacity:0.8;

`;



const MovieInfoComponent =(props)=>{
    const{ selectedMovie } =props;
    const [movieInfone, setMovieInfone] = useState();
    useEffect(() => {axios.get(`https://www.omdbapi.com/?i=${selectedMovie}&apiKey=4621eb20`).then((response)=>{setMovieInfone(response.data)})
    }, [selectedMovie]);
    return(
        <Container>
            <Poster src={movieInfone?.Poster}/>
            <MovieInfo>
                <Title>{movieInfone?.Title}</Title>
                <Line><b>Year </b> : {movieInfone?.Year}</Line>
                <Line><b>IMDB Rating </b>: {movieInfone?.imdbRating}</Line>
                <Line><b>Runtime</b> : {movieInfone?.Runtime}</Line>
                <Line><b>Type </b>: {movieInfone?.Type}</Line>
                <Line><b>Genre</b> : {movieInfone?.Genre}</Line>
                <Line><b>Plot </b>: {movieInfone?.Plot}</Line>
                <Line><b>Actors </b>: {movieInfone?.Actors}</Line>
                <Line><b>Director</b> : {movieInfone?.Director}</Line>
                <Line><b>Released </b>: {movieInfone?.Released}</Line>
                <Line><b>Rated </b>: <span>{movieInfone?.Rated}</span></Line>
                <Line><b>Language</b>: <span>{movieInfone?.Language}</span></Line>
            </MovieInfo>
            <Close>X</Close>
        </Container>
    );
};
export default MovieInfoComponent;