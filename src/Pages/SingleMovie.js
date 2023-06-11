import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import "./SingleMovie.css"

function SingleMovie(){

    const movie = useParams()
    const[singleMovie, setsingleMovie] = useState({})

    useEffect(() =>{
        axios.get(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=a66dbebe468be263763ce1dc9c63cca9`)
        .then((res) => setsingleMovie(res.data))
        .catch((err) =>console.log(err))
    },[])

    return(
      
	<div className="single-product">
		<div className="container">
			<div className="row">
				<div className="col-md-5">
					<div className="single-product-img">
						<img src={`https://image.tmdb.org/t/p/w500${singleMovie.poster_path}`}/>
					</div>
				</div>
				<div className="col-md-7">
					<div className="single-product-content">
						<h3>{singleMovie.title}</h3>
						<p>{singleMovie.overview}</p>
					</div>
                    <Link to= "/movies" className="btn mr-2 btnstyle">Back</Link>
				</div>
			</div>
		</div>
	</div>
        
    )
}

export default SingleMovie