import {Link} from "react-router-dom"
import { useSelector } from "react-redux";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";


function Navbar(){

    const counter=useSelector((state) => state.counter)
    const { contextTheme, setContextTheme } = useContext(ThemeContext)

    return(
    <nav className="navbar navbar-expand-lg  bg-dark navbar-dark">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{marginLeft:"1.5rem"}}>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item" style={{fontSize:"20px", fontWeight:"500"}}>
                    <Link className="nav-link text-white"  to="/" > Home </Link> 
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white"  to="/login" style={{fontSize:"20px", fontWeight:"500"}} > Login </Link> 
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white"  to="/register" style={{fontSize:"20px", fontWeight:"500"}}> Register </Link> 
                </li>
                <li className="nav-item text-white">
                    <Link to="/todolist" className="nav-link text-white" style={{fontSize:"20px", fontWeight:"500"}}>ToDo</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white"  to="/movies" style={{fontSize:"20px", fontWeight:"500"}}> Movies </Link> 
                </li>
                <li className="nav-item">
                    <Link to="/favorites" className="nav-link text-white" style={{fontSize:"20px", fontWeight:"500"}}>
                        Favorites 
                        <span style={counter===0?{visibility:"hidden"}:{visibility:"visible"}} className="ms-1 badge rounded-pill text-bg-danger">{counter}</span>
                    </Link>
                </li>
                <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Theme
                            </a>
                            <ul class="dropdown-menu">
                            <li><a class="dropdown-item" onClick={() => setContextTheme("light")}>light</a></li>
                            <li><a class="dropdown-item" onClick={() => setContextTheme("dark")}>dark</a></li>
                            </ul>
                        </li>
            </ul>
            <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
            </div>
        </div>
    </nav>
    )
}

export default Navbar