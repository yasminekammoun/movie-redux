import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import store from './store';
import { BrowserRouter, Route } from 'react-router-dom';
import MoviDesc from './MovieDescrip';

 
ReactDOM.render(<Provider store={store}>
    <BrowserRouter>
    <Route exact path="/" component={App}/>
    <Route exact path='/movie/:title' component={MoviDesc}/>
    
    </BrowserRouter>
    
</Provider>, document.getElementById('root'));

serviceWorker.unregister();
