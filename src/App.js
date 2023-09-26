import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Header, Footer, PageTitle } from './components/common'

import './App.css';
import Content from "./components/common/content/Content";

function App() {
    return (
        <div className="App">

            <Header />
            <Switch>
                <Route path="/Home">
                    <PageTitle title="Home"/>
                </Route>
                <Route path="/Service">
                    <PageTitle title="Service"/>
                </Route>
                <Route path="/News">
                    <PageTitle title="News"/>
                </Route>
                <Route path="/About">
                    <PageTitle title="About"/>
                </Route>
                <Route path="/contact">
                    <PageTitle title="contact"/>
                </Route>

            </Switch>
            <Content />
            <Footer />


        </div>
    );
}

export default App;
