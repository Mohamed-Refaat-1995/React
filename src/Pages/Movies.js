import axios from "axios"
import { useEffect, useState } from "react"
import MovieCard from "./MovieCard"
import { useSelector, useDispatch } from "react-redux";
import { addMovieToFavorites } from "../Store/Actions/addMovieToFavorites";
import { incrementCounter } from "../Store/Actions/addMovieToFavorites";

function Movies(){

    const [movies, setMovies] = useState([])

    useEffect(() =>{
        axios.get("https://api.themoviedb.org/3/movie/popular?api_key=a66dbebe468be263763ce1dc9c63cca9")
        .then((res) => setMovies(res.data.results))
        .catch((err) => console.log(err))
    },[])

    const favList = useSelector((state) => state.favorites)
    // const counter = useSelector((state) => state.counter)
    const dispatch = useDispatch() // to call the action

    const HandleAdd = (e, movie, movieId) => {
        if (!favList.some(movie => movie.id === movieId)) {
            dispatch(addMovieToFavorites(movie));
            dispatch(incrementCounter());
        }
    }

    return (
        <>
            <div className="container">
                <div className="container mt-5 d-flex flex-wrap justify-content-evenly">
                    {movies.map((movie, index) =>{
                        return(
                            <div key={index}>
                                <MovieCard  poster_path={movie.poster_path} title={movie.title} overview={movie.overview} id={movie.id}/>
                                <button onClick={(e) => HandleAdd(e, movie, movie.id)} style={{ position: "relative", bottom: "135px", left: "75px" }} 
                                className={(!favList.some(movieObj => movieObj.id === movie.id)) ? "btn btn-outline-warning" : "btn btn-warning text-light"}>
                                    <i className="fa-solid fa-star"></i>
                                    </button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Movies