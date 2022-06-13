import styled from "styled-components";

const MovieContainer = styled.div`
display:flex;
flex-direction: column;
padding:10px;
width:230px;
border-radius: 3px;
margin:30px 20px;

cursor: pointer;
box-shadow : 3px 5px 3px 2px #5555;
`;
const CoverImage = styled.img`
height: 320px;
border-radius: 3px;
outline: 2px solid white`;

const MovieName = styled.span`
font-size: 14px;
margin:10px 0px;
font-weight: bold;
white-space : nowrap;
text-overflow: ellipsis;
overflow : hidden;
`;
const InfoColumn =styled.div`
    display : flex;
    margin: 10px 0px;
    flex-direction: row;
    justify-content : space-between;

`;
const MovieComponent = (props) =>{
    const{Title,Year , imdbID ,Type ,Poster} = props.movie;
    
    return(
        <MovieContainer onClick={()=>{props.onMovieSelect(imdbID)}}>
        <CoverImage src={Poster}/>    
             <MovieName>{Title} </MovieName>
             <InfoColumn>
                 <span> Year :{Year}</span>
                 <span>Type: {Type}</span>
             </InfoColumn>
        </MovieContainer>
    )
};

export default MovieComponent;