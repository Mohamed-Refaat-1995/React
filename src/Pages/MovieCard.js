
import { Link } from "react-router-dom"
import  "./MovieCard.css"

function MovieCard({poster_path,title,overview,id}){

    return(
        
            <div className="card" style={{width: "16rem", marginTop:"2rem"}}>
            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} className="card-img-top" />
            <div className="card-body">
                    <h6 className="card-title" style={{color:"#FF512F"}}>{title}</h6>
                    {/* <p className="card-text">{overview}</p> */}
                    <Link to={`/movies/${id}`} className="btn" >More Details</Link>
                </div>
            </div>
               
    )

}

export default MovieCard