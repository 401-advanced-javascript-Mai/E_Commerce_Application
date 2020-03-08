import React from 'react' ;
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app.js' ;
import store from './store/index.js'

function Main(){
    return
    <Provider store={store}>
        <App />
    </Provider>
}

const root = document.getElementById('root');
ReactDom.render(<Main /> , root);