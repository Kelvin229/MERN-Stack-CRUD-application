import React from "react";
import {Container} from '@material-ui/core';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Navbar from "./components/Navbar/Navbar";
import Auth from "./components/Auth/Auth";
import Home from "./components/Home/Home";

const App = () =>(
    <BrowserRouter>
    <Container maxidth="lg">
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/auth" exact component={Auth}/>
            </Switch>
        </Container>
    </BrowserRouter>
);

export default App;