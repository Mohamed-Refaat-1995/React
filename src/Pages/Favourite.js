import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { removeMovieFromFavorites } from "../Store/Actions/addMovieToFavorites";
import { decrementCounter } from "../Store/Actions/addMovieToFavorites";


function Favourite() {
    const favorites = useSelector((state) => state.favorites);
    // const counter = useSelector((state) => state.counter)
    const hasFavorites = favorites.length > 0;

    console.log(hasFavorites)

    const dispatch = useDispatch();


    const HandleRemove = (e, movieId) => {
        dispatch(removeMovieFromFavorites(movieId));
        dispatch(decrementCounter());
    }


    return (
        <div className="container">
            <h1 className="mt-4 display-5">My Favorites</h1>

            {hasFavorites ? <div className="container mt-5 d-flex flex-wrap justify-content-evenly">
                {favorites.map((movie, index) => {
                    return (
                        <div className="card mb-3" style={{ width: "16rem" }} key={index}>
                            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top" />
                            <div>
                                <h6 className="card-title">{movie.title}</h6>                
                                <Link to={`/movies/${movie.id}`} className="btn btn-primary"> More Details </Link>
                                <button onClick={(e) => HandleRemove(e, movie.id)} className='btn btn-outline-danger' style={{ position: "relative",left: "5px" }} >
                                    <i className="fa-solid fa-trash"></i>
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
            :
            <div>
                <img className="w-50 mt-2" src="https://cdn.dribbble.com/users/1291846/screenshots/3720238/media/1038c769be34018f642b683e83fca9ea.png" alt=""/>
                <p className="fs-5 fst-italic text-muted">No Favorites Yet!</p>
            </div>}

        </div>
    )
}

export default Favourite;