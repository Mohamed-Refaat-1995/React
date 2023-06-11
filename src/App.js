import './App.css';
import MyPortfolio from './IntroPages/MyPortfolio';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './Auth/LoginForm';
import RegistrationForm from './Auth/RegistrationForm';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './Routing/Navbar';
import NotFound from './Routing/NotFound';
import Movies from './Pages/Movies';
import SingleMovie from './Pages/SingleMovie';
import Favourite from './Pages/Favourite';
import ToDoForm from './Pages/ToDoForm';
import { useState } from 'react';
import {ThemeContext} from './Context/ThemeContext'

function App() {
  const [contextTheme, setContextTheme] = useState("light")

  return (
    <div className={contextTheme == "dark" ? "bg-dark text-light" : "bg-light"}>

     {/* <MyPortfolio/> */}
     {/* <LoginForm/> */}
     {/* <RegistrationForm/> */}
     <ThemeContext.Provider value={{ contextTheme, setContextTheme }}/>
      <BrowserRouter>
          <Navbar/>
        <Switch>
          
              <Route   path={"/"} exact component={MyPortfolio} />
              <Route   path={"/login"} exact component={LoginForm}   /> 
              <Route   path={"/register"} exact component={RegistrationForm}   /> 
              <Route   path={"/todolist"} exact component={ToDoForm}   /> 
              <Route   path={"/movies"} exact component={Movies}   /> 
              <Route   path={"/movies/:id"} exact component={SingleMovie}   /> 
              <Route   path={"/favorites"} exact component={Favourite}   /> 
              <Route   path={"*"} exact component={NotFound}   /> 
              
        </Switch>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
