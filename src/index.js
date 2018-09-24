import React from 'react'
import ReactDOM from 'react-dom'
import store from './store/Store'
import ShostakMarina from './Conteiner/InfoContainer'
import {Provider} from 'react-redux';



const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <ShostakMarina />
        </Provider>,
        document.getElementById('root'))
};

store.subscribe(render);
render();
