import React, {Fragment, useState, useEffect} from 'react'
import{
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from 'react-router-dom';

import Main from './Pages/Main';
import Login from './Pages/Login';
import Register from './Pages/Register'
import Dashboard from './Pages/Dashboard'

const App = () => {

const [isAuthenticated, setIsAuthenticated] = useState(false);

    const setAuth = (boolean) =>{
    setIsAuthenticated(boolean);
    };

    async function isAuth(){
    try {
        const response = await fetch('http://localhost:4000/auth/is-verified',{
        method: "GET",
        headers: {token: localStorage.token}
        });

        const parseRes = await response.json(); 

        parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
    } catch (err) {
        console.error(err.message);
    }
    };

    useEffect(()=>{
    isAuth();
    });



    return (
        <Fragment>
            <Router>
                <Switch>
                    <Route 
                    exact path="/"
                    render={(props) => !isAuthenticated ? (<Main {...props}/>) : (<Redirect to='/dashboard'/>)}
                    />
                    <Route 
                    exact path="/login" 
                    render={(props) => !isAuthenticated ? (<Login {...props} setAuth={setAuth} />) : (<Redirect to='/dashboard'/>)} 
                    />
                    <Route
                    exact path="/register"
                    render={(props) => !isAuthenticated ? (<Register {...props} setAuth={setAuth} />) : (<Redirect to='/dashboard'/>)}
                    />
                    <Route
                    exact path="/dashboard"
                    render={(props) => isAuthenticated ? (<Dashboard {...props} setAuth={setAuth} />) : (<Redirect to='/login'/>)}
                    />
                </Switch>
            </Router>
        </Fragment>
    )
}

export default App
