import React, { Component, Fragment } from 'react';

import Header from './components/Header';
import ImageGrid from './components/ImageGrid';
import { Provider } from 'react-redux';
import configureStore from './store';

const store = configureStore();

class App extends Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <Fragment>
                        <Header />
                        <ImageGrid />
                    </Fragment>
                </Provider>
            </div>
        );
    }
}

export default App;
