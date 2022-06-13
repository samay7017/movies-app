import styled from 'styled-components';
import MovieComponent from './components/MovieComponent';
import MovieInfoComponent from './components/MovieInfoComponent';
import React, {useState} from "react";
import axios from 'axios';
import logo from './final.jpg';
const Container=styled.div`
display:flex;
flex-direction: column;
`;
const Header= styled.div`
display:flex;
flex-direction: row;
background-color: black;
color:white;
padding:5px;
justify-content:space-between;
margin:0;
height:40px`;
const AppName = styled.div`
display:flex;
flex-direction: row;
align-items:center;
padding:5px;
justify-content: center`;
const HeaderImage = styled.img`
margin:0px;
width:35px;
height:35px;
margin-right :10px`;
const SearchBar =styled.form`
align-items: center;
justify-content: center;
display: flex;
flex-direction : row;
margin-right:30px;
& img{
    width: 35px;
    height:35px;
    margin-right:10px;
}
& input{
    height: 20px;
    border-radius: 3px;
    border: 2px solid black;
    outline: 1px solid white;
}
& button{
    height: 25px;
    margin-left: 15px;

    border: 2px solid black;
    border-radius: 2px;
    outline : 1px solid white;
}
`;
const Options = styled.div`
display:flex;
flex-direction: row;

justify-content: center;
align-items:center;
& ul{
    display:flex;
    flex-direction: row;
    align-items : center;
    justify-content : center;
    list-style: none;
    
    

}
& li{
    margin: 20px;
    cursor: pointer;
}`;
const MovieListContainer = styled.div`
    display:flex;
    flex-direction: row;
    flex-wrap:wrap;
    padding: 30px;
    justify-content : space-evenly;
`;

const App = () =>{
    const [searchQuery , setSearchQuery] = useState();
    const [timeoutId,  setTimeoutId] = useState();
    const [selectedMovie , onMovieSelect] = useState();
    const [movieList , setMovieList] = useState([]);

    const fetchData =async (searchString)=>{
        const response = await axios.get(`http://www.omdbapi.com/?s=${searchString}&apikey=4621eb20`);
        setMovieList(response.data.Search);
    }

    const onTextChange = (e)=>{
            clearTimeout(timeoutId);
            setSearchQuery(e.target.value); 
            const timeout = setTimeout(()=>{fetchData(e.target.value)}, 500);
            setTimeoutId(timeout);
    
    }
    return <Container>
               <Header>
                   <AppName>
                    <HeaderImage src="./icons/header.png" />
                        <h4> The Carnival App </h4>
                   </AppName>
                   <Options>
                        <ul>
                            <li> <a href="/" style={{textDecoration:'none' , color:'white'}}>About us </a></li>
                            <li><a href="/" style={{textDecoration:'none' , color:'white'}}>Contact </a></li>
                        </ul>
                   </Options>
                   <SearchBar>
                       <img src="./icons/searching.png"></img>
                       <input type="text" placeholder="Search Movie" value={searchQuery} onChange={onTextChange}></input>
                       <button type="submit">search</button>
                   </SearchBar>
              </Header>
              {selectedMovie && <MovieInfoComponent selectedMovie={selectedMovie}/>}
              <MovieListContainer>
                {movieList?.length ?movieList.map((movie ,index)=> <MovieComponent movie={movie} key={index} onMovieSelect={onMovieSelect}/> ) : <img src={logo} width="100%" height="100%" /> }
                
              </MovieListContainer>
         </Container>
 
 };
 export default App;