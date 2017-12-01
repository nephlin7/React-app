import React from 'react';
import {Switch, Route} from 'react-router-dom';
import home from './pages/home';
import About from './pages/About';
import contact from './pages/contact';
import NotFound from './components/NotFound';
const Main = () => (
    <main className="main main-raised">
        <div className="container">
            <Switch>
                <Route exact path='/' component={home}/>
                <Route path='/About' component={About}/>
                <Route path='/Contact' component={contact}/>

                <Route path="*" component={NotFound} />
            </Switch>
        </div>
    </main>
);

export default Main;