import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from './components/NotFound';
import LoginPage from './components/LoginPage';

const App = () => (
    <div className='body'>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={LoginPage} />
                <Route path="*" component={NotFound} />
            </Switch>
        </BrowserRouter>
    </div>
);

export default App;
